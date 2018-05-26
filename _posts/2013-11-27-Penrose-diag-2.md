---
layout: post
title:  Penrose diagrams - quick review [part 2]
date:   2013-11-27 22:26:00 -0400
categories: Science
tags:
  - science
  - physics
---

In this post I’ll finish my brief introduction to Penrose diagrams and the process of compactification. [Last time]({{ site.baseurl }}{% link _posts/2013-11-27-Penrose-diag-1.md %}) we found out how to compactify the free space, and this simple trick helped us to represent infinite trajectories (four-dimensional) on our limited plot. Now we’ll try to build this kind of Carter-Penrose diagram for more physically interesting cases and analyze what we got.

## Compactification and Penrose Diagrams

Ok, we’re now armed with our $$t$$-$$r$$ $$\to$$ $$U^+$$-$$U^-$$ transformation and are ready to squeeze our Schwarzschild black hole with its ambient time-space into a limited area. You can make sure with simple calculations that the singularity of the BH will transform into a straight line, the outer part will look very similar to the diagram of empty space, and the $$r=const$$ lines will look similar to those from empty space. Here we’ll again have two timelike infinities (asymptote of $$t=const$$ lines), spacelike infinity (asymptote of $$r=const$$ lines) and lighlike infinity, where the light trajectories come from and lead to. The horizon will be transformed into a finite straight diagonal lines, thus the interior will look pretty much the same as in Kruskal coordinates. The Penrose diagram for a Schwarzschild BH is on a picture below.

![pic1](/assets/images/2013-penrose/pic8.png)

The left part of the diagram represents the ‘fictional world’, which is not connected causally with the rest of our diagram, as one would require superluminal velocities to get there. The curved lines are $$r=const$$ eternal spheres in the exterior of the BH. The one thing to be noticed here is that, as in case of Kruskal-Szekeres metric, it will take finite time to hit the singularity once you’re inside the horizon. So the singularity is finite time away from us (here it’s even more obvious).

Now consider the left side of our diagram, we got this left region with simple transformations of our spherical coordinates into Kruskal-Szekeres metric (this is the so-called extended Kruskal metric) and further compactification. So it seems we got two exterior regions connected together with the horizon. This fact, however, is sometimes interpreted as the possibility of existence of the so-called Einstein-Rosen bridges, or wormholes, - the speculative hypothesis about the potential connection between two causally independent universes through the interior of the black hole. If you hypothetically consider an extended (horizontal) line<sup id="a1">[[1]](#f1)</sup> from $$r=\infty$$ all the way to $$r=0$$ and further to $$r=-\infty$$, you’ll see that once you get closer to the horizon, the $$r=const$$ spheres keep shrinking until they get to their minimum size $$r=r_g$$. If you keep going along this line they (spheres) start expanding again, so it may seem that you can pass through that bridge likewise to wormhole, which connects two external regions of the black hole (two possible universes). But unfortunately (or maybe fortunately) you can’t, because if you wish to get from right quadrant to the left one, you would require superluminal trajectories.

![pic1](/assets/images/2013-penrose/pic9.jpg)

## Penrose Diagram for a Black Hole Formation

We’re now ready to construct a Penrose diagram for some, maybe not physically possible, but yet interesting case. The system we’re going to consider is the simplest model of BH formation. Imagine a thin spherical shell of incoming radiation collapsing with a speed of light conserving its spherical symmetry. The shell carries momentum and energy; hence, gravity is present in this kind of system. One should know from school physics that inside that shell there is no gravitational force (Newton’s theorem), and outside it, gravitational force is identical to that of a point mass (Schwarzschild). Therefore, in the interior of the shell we’d have the Penrose diagram for an flat space-time and outside we’ll simply have a Penrose diagram for a Schwarzschild black hole. We must here take into account, that the radius of our shell is in motion, thus the border between two diagrams is time-dependent, so we must somehow connect two diagrams with a ‘moving’ border between them.

This procedure is easy to be done if you consider the trajectory of an incoming shell on both diagrams and then connect two diagrams along that trajectory, because, as I wrote above, the interior of the shell is correctly represented by the flat space-time Penrose diagram, and the exterior of the shell is represented by the Schwarzschild black hole Penrose diagram. As seen on a picture below, on both diagram incoming shell trajectory lines can be drawn. After that, these two diagrams are to be effectively cut along these red lines and glued together (the interior of the shell with the exterior). This procedure is described on a picture below. Hence we get the geometry (Penrose diagram) of the BH formed by an infalling shell.

![pic1](/assets/images/2013-penrose/pic10.png)

At an any particular moment of time our shell is a sphere infalling with the speed of light. The horizon nonetheless exists firstly in the interior of the shell even before the shell itself meets it, so even before the BH is formed physically, there is a region of no escape. As one can accord from this diagram, there is a moment of time (red point in the picture below), when the shell enters the horizon. So this is the no-return point of time. Before shell meets the horizon, you can put spherical mirrors and reflect the shell, so that it’s not trapped inside the horizon and the BH is not formed. However, once the shell enters the horizon, there’s no way back, it’s doomed – you can do anything you want, the shell will collapse into the singularity anyway.

The one pretty crazy and nonintuitive thing to be concluded from this diagram is the following. Notice the little triangle are on the left, which is still in the interior of the shell but above the horizon line. If you find yourself in that region (purple point) of space-time, you’re going to experience an interesting thing (remember that your motion is restricted by the purple light cone). You’re in a flat space (interior of the shell), so you can’t feel any gravity and as well you can’t see the shell incoming, if you look backward in your past. Nevertheless, yet, you are trapped under the horizon, so you can’t escape to a lightlike infinity. The only thing you can do is to ultimately fall on a singularity. You can still cross the shell, but you can’t get out of the horizon, and you can’t prevent the shell from falling.

![pic1](/assets/images/2013-penrose/pic11.png)

Well, one can play around and suppose different scenarios in this geometry, like, whether someone can prevent the shell from falling still being inside the horizon, or can someone in the interior of the shell know whether the shell is collapsing etc. The only thing you should remember, is that any observer can only move inside the light cone, and you should also get used to $$r=const$$ and $$t=const$$ hyperspheres and these complicated infinities.

With all that stuff in mind, you can now mention how easy it is to do any kind of physical analysis in practically any kind of space-time with the help of Penrose diagrams. Of course, the only thing to do is to correctly carry out the compactification and construct this diagram.

This post was also appear very important, as I’m planning to write about the black holes thermodynamics in my further posts, thus I would refer to this reviews. I strongly advice interested ones to listen to Leonard Susskind’s lecture on Penrose diagrams [online](https://www.youtube.com/watch?v=q6j180O9H84).

---

<b id="f1">[1]</b> Each point on that line represents a 2-dimensional sphere at a particular moment of time $$t=0$$. [↩](#a1)
