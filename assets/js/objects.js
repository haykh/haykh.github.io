class Particle {
  constructor (sketch, x, y, vx, vy) {
    this.sketch = sketch;
    this.pos = this.sketch.createVector(x, y);
    this.vel = this.sketch.createVector(vx, vy);
  }
  push(vmag) {
    this.pos.add(this.vel);
    this.pos.x = periodicLimit(this.pos.x, 0, this.sketch.width);
    this.pos.y = periodicLimit(this.pos.y, 0, this.sketch.height);
    let velmag = vmag / 20;
    this.vel.x += this.sketch.random(-velmag, velmag);
    this.vel.y += this.sketch.random(-velmag, velmag)
    this.vel.limit(vmag);
  }
  draw(rad=1) {
    this.sketch.circle(this.pos.x, this.pos.y, 2*rad);
  }
}

class ParticlePopulation {
  constructor(sketch, particles) {
    this.sketch = sketch;
    if (particles)
      this.size = particles.length;
    else
      this.size = 0
    this.prtls = particles;
  }
  append(prtls) {
    if (prtls.size > 0)
      prtls.forEach(prtl => this.add(prtl));
  }
  add(prtl) {
    if (this.prtls)
      this.prtls.push(prtl)
    else
      this.prtls = [prtl]
    this.size += 1;
  }
  push(vmag) {
    if (this.prtls)
      this.prtls.forEach(prtl => prtl.push(vmag));
  }
  draw(col=255, rad=1) {
    if (this.prtls) {
      this.sketch.fill(255);
      this.sketch.noStroke();
      this.prtls.forEach(prtl => prtl.draw(rad));
    }
  }
}

class Meshblock {
  constructor (sketch, xmin, xmax, ymin, ymax) {
    this.sketch = sketch;
    this.xmin = xmin;
    this.xmax = xmax;
    this.ymin = ymin;
    this.ymax = ymax;
  }
  consists(prtl) {
    return ((prtl.pos.x >= this.xmin) && (prtl.pos.x < this.xmax) &&
            (prtl.pos.y >= this.ymin) && (prtl.pos.y < this.ymax));
  }
  intersects(xc, yc, rad) {
    let closest_x = this.sketch.max(this.xmin, this.sketch.min(xc, this.xmax))
    let closest_y = this.sketch.max(this.ymin, this.sketch.min(yc, this.ymax))
    return (this.sketch.dist(closest_x, closest_y, xc, yc) < rad)
  }
  get subblock_11() {
    return (new Meshblock(this.sketch,
                          this.xmin, (this.xmax+this.xmin)*0.5,
                          this.ymin, (this.ymax+this.ymin)*0.5));
  }
  get subblock_12() {
    return (new Meshblock(this.sketch,
                          (this.xmax+this.xmin)*0.5, this.xmax,
                          this.ymin, (this.ymax+this.ymin)*0.5));
  }
  get subblock_21() {
    return (new Meshblock(this.sketch,
                          this.xmin, (this.xmax+this.xmin)*0.5,
                          (this.ymax+this.ymin)*0.5, this.ymax));
  }
  get subblock_22() {
    return (new Meshblock(this.sketch,
                          (this.xmax+this.xmin)*0.5, this.xmax,
                          (this.ymax+this.ymin)*0.5, this.ymax));
  }
  draw() {
    this.sketch.noFill();
    this.sketch.stroke(255);
    this.sketch.strokeWeight(1);
    this.sketch.rect(this.xmin, this.ymin, this.xmax-this.xmin, this.ymax-this.ymin);
  }
}

class QuadTree {
  constructor(sketch, nmax, mblock) {
    this.sketch = sketch;
    this.isParent = false;
    this.block = mblock;
    this.nmax = nmax;
    this.population = new ParticlePopulation()
  }
  append(pop) {
    if (pop.size > 0)
      pop.prtls.forEach(prtl => this.add(prtl));
  }
  add(prtl) {
    if (this.population.size < this.nmax) {
      this.population.add(prtl);
    } else {
      if (!this.isParent) {
        this.split();
      }
      if (this.child_11.consists(prtl)) {
        this.child_11.add(prtl);
      } else if (this.child_12.consists(prtl)) {
        this.child_12.add(prtl);
      } else if (this.child_21.consists(prtl)) {
        this.child_21.add(prtl);
      } else {
        this.child_22.add(prtl);
      }
    }
  }
  split() {
    this.isParent = true;
    this.child_11 = new QuadTree(this.sketch, this.nmax, this.block.subblock_11);
    this.child_12 = new QuadTree(this.sketch, this.nmax, this.block.subblock_12);
    this.child_21 = new QuadTree(this.sketch, this.nmax, this.block.subblock_21);
    this.child_22 = new QuadTree(this.sketch, this.nmax, this.block.subblock_22);
  }
  consists(prtl) {
    return this.block.consists(prtl);
  }
  findNeighborhood(prtl, radius, neighbors) {
    if (!neighbors)
      neighbors = []
    if (this.block.intersects(prtl.pos.x, prtl.pos.y, radius)) {
      this.extractParticles(prtl.pos.x, prtl.pos.y, radius, neighbors);
      if (this.isParent) {
        this.child_11.findNeighborhood(prtl, radius, neighbors);
        this.child_12.findNeighborhood(prtl, radius, neighbors);
        this.child_21.findNeighborhood(prtl, radius, neighbors);
        this.child_22.findNeighborhood(prtl, radius, neighbors);
      }
    } else {
      return;
    }
    return neighbors
  }
  extractParticles(xc, yc, rad, neighbors) {
    if (this.population.size > 0)
      for (var i = 0; i < this.population.size; ++i) {
        let prtl = this.population.prtls[i];
        let dst = this.sketch.dist(xc, yc, prtl.pos.x, prtl.pos.y);
        if (dst < rad && dst > 0.0001) {
          neighbors.push(prtl);
        }
      }
  }
  draw() {
    this.block.draw();
    // this.population.draw();
    if (this.isParent) {
      this.child_11.draw();
      this.child_12.draw();
      this.child_21.draw();
      this.child_22.draw();
    }
  }
}
