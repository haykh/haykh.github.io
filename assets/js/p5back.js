var qtree;
var population;
var vel_mag = 0.5;
var nprtls = 50;
var nei_rad0 = 60, nei_rad;

var bg_canvas;

function reshuffleParticles(pop) {
  pop.prtls.forEach(function(prtl) {
    prtl.pos.x = random(0, width);
    prtl.pos.y = random(0, height);
  });
}

function resizeBGCanvas() {
  let mainwin = document.getElementsByTagName('main')[0];
  let xleft = mainwin.getBoundingClientRect().x;
  let mainwidth = mainwin.offsetWidth;
  if (xleft < 1) {
    resizeCanvas(windowWidth, windowHeight);
  } else {
    resizeCanvas(xleft, windowHeight);
  }
  nei_rad = nei_rad0 * sqrt(min(width, height) / 300);
}

function windowResized() {
  resizeBGCanvas();
  reshuffleParticles(population);
}

function setup() {
  bg_canvas = createCanvas(windowWidth, windowHeight);
  resizeBGCanvas();
  bg_canvas.position(0, 0);
  bg_canvas.style('z-index', '-1');
  // background(23);
  frameRate(30);
  population = new ParticlePopulation();
  qtree = new QuadTree(5, new Meshblock(0, width, 0, height))
  for (var i = 0; i < nprtls; ++i) {
    let prtl = new Particle(mouseX + random(0, width),
                            mouseY + random(0, height),
                            random(-vel_mag, vel_mag), random(-vel_mag, vel_mag))
    population.add(prtl);
  }
}

function draw() {
  // background(23);
  clear();
  qtree = new QuadTree(5, new Meshblock(0, width, 0, height))
  qtree.append(population);

  population.push();

  noFill();
  strokeWeight(1);
  population.prtls.forEach(function(prtl) {
    nhood = new ParticlePopulation(qtree.findNeighborhood(prtl, nei_rad));
    nhood.prtls.forEach(function(nei) {
      let dst = dist(nei.pos.x, nei.pos.y, prtl.pos.x, prtl.pos.y);
      let col = map(dst, 0, nei_rad, 255, 0);
      stroke(col, 23, 123);
      line(nei.pos.x, nei.pos.y, prtl.pos.x, prtl.pos.y);
    });
  });

  population.draw(col=255, rad=1);

}
