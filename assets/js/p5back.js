function bgSketch(nprtls, mainQ) {
  return function ($) {
    var population;
    var vel_mag = 0.5;
    // var nprtls = 50;
    var nei_rad0 = 60, nei_rad;
    var old_mainwidth = 0, regime_changed = false;
    var bg_canvas;
    var activeQ = true;
    
    var step = 0, updateInterval = 10;

    function reshuffleParticles(pop) {
      pop.prtls.forEach(function(prtl) {
        prtl.pos.x = $.random(0, $.width);
        prtl.pos.y = $.random(0, $.height);
      });
    }

    function resizeBGCanvas() {
      let mainwin = document.getElementsByTagName('main')[0];
      let xleft = mainwin.getBoundingClientRect().x;
      let mainwidth = mainwin.offsetWidth;
      if (mainQ) {
        regime_changed = ($.abs(old_mainwidth - mainwidth) > 10);
        old_mainwidth = mainwidth;
        if (xleft < 1) {
          $.resizeCanvas($.windowWidth, $.windowHeight);
        } else {
          $.resizeCanvas(xleft, $.windowHeight);
        }
        nei_rad = nei_rad0 * $.sqrt($.min($.width, $.height) / 300);
      } else {
        mainwidth = $.windowWidth - xleft - mainwidth;
        regime_changed = ($.abs(old_mainwidth - mainwidth) > 10);
        old_mainwidth = mainwidth;
        if (xleft < 1) {
          activeQ = false;
          $.resizeCanvas(1, 1);
        } else {
          activeQ = true;
          $.resizeCanvas(mainwidth, $.windowHeight);
          bg_canvas.position(mainwin.offsetWidth + xleft, 0);
        }
        nei_rad = nei_rad0 * $.sqrt($.min($.width, $.height) / 300);
      }
    }

    $.windowResized = function() {
      resizeBGCanvas();
      if (regime_changed) {
        reshuffleParticles(population);
      }
    }

    $.setup = function() {
      bg_canvas = $.createCanvas(0, 0);
      bg_canvas.position(0, 0);
      resizeBGCanvas();
      bg_canvas.style('z-index', '-1');
      $.frameRate(30);
      population = new ParticlePopulation($);
      for (var i = 0; i < nprtls; ++i) {
        let prtl = new Particle($,
                                $.random(0, $.width),
                                $.random(0, $.height),
                                $.random(-vel_mag, vel_mag), $.random(-vel_mag, vel_mag))
        population.add(prtl);
      }
    }

    $.draw = function() {
      $.clear();
      if (step >= updateInterval) {
        step = 0;
      }
      if (activeQ) {
        let qtree = new QuadTree($, 3, new Meshblock($, 0, $.width, 0, $.height))
        qtree.append(population);
        population.push(vel_mag);
        $.noFill();
        $.strokeWeight(1);
        population.prtls.forEach(function(prtl, ind) {
          if ((step + ind) % updateInterval == 0 || !prtl.nhood || prtl.crossedBoundary) {
            prtl.nhood = new ParticlePopulation($, qtree.findNeighborhood(prtl, nei_rad));
          }
          prtl.nhood.prtls.forEach(function(nei) {
            let dst = $.dist(nei.pos.x, nei.pos.y, prtl.pos.x, prtl.pos.y);
            let col = $.map(dst, 0, nei_rad, 255, 0);
            $.stroke(col, 23, 123);
            $.line(nei.pos.x, nei.pos.y, prtl.pos.x, prtl.pos.y);
          });
        });
        population.draw();
      }
      step ++;
    }
  }
}
window.addEventListener('load', (event) => {
  new p5(bgSketch(50, true));
  // new p5(bgSketch(30, false));
});
