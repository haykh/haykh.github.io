class Particle {
  constructor (x, y, vx, vy) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
  }
  push() {
    this.pos.add(this.vel);
    this.pos.x = periodicLimit(this.pos.x, 0, width);
    this.pos.y = periodicLimit(this.pos.y, 0, height);
    let velmag = vel_mag / 20;
    this.vel.x += random(-velmag, velmag);
    this.vel.y += random(-velmag, velmag)
    this.vel.limit(vel_mag);
  }
  draw(rad=1) {
    circle(this.pos.x, this.pos.y, 2*rad);
  }
}

class ParticlePopulation {
  constructor(particles) {
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
  push() {
    if (this.prtls)
      this.prtls.forEach(prtl => prtl.push());
  }
  draw(col=255, rad=1) {
    if (this.prtls) {
      fill(col);
      noStroke();
      this.prtls.forEach(prtl => prtl.draw(rad));
    }
  }
}

class Meshblock {
  constructor (xmin, xmax, ymin, ymax) {
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
    let closest_x = max(this.xmin, min(xc, this.xmax))
    let closest_y = max(this.ymin, min(yc, this.ymax))
    return (dist(closest_x, closest_y, xc, yc) < rad)
  }
  get subblock_11() {
    return (new Meshblock(this.xmin, (this.xmax+this.xmin)*0.5,
                          this.ymin, (this.ymax+this.ymin)*0.5));
  }
  get subblock_12() {
    return (new Meshblock((this.xmax+this.xmin)*0.5, this.xmax,
                          this.ymin, (this.ymax+this.ymin)*0.5));
  }
  get subblock_21() {
    return (new Meshblock(this.xmin, (this.xmax+this.xmin)*0.5,
                          (this.ymax+this.ymin)*0.5, this.ymax));
  }
  get subblock_22() {
    return (new Meshblock((this.xmax+this.xmin)*0.5, this.xmax,
                          (this.ymax+this.ymin)*0.5, this.ymax));
  }
  draw() {
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(this.xmin, this.ymin, this.xmax-this.xmin, this.ymax-this.ymin);
  }
}

class QuadTree {
  constructor(nmax, mblock) {
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
    this.child_11 = new QuadTree(this.nmax, this.block.subblock_11);
    this.child_12 = new QuadTree(this.nmax, this.block.subblock_12);
    this.child_21 = new QuadTree(this.nmax, this.block.subblock_21);
    this.child_22 = new QuadTree(this.nmax, this.block.subblock_22);
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
        let dst = dist(xc, yc, prtl.pos.x, prtl.pos.y);
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
