---
layout: post
title:  Paradox of dissipative statistical mechanics [or] Where the hell is the second bob
date:   2013-11-20 11:10:00 -0400
categories: Science Thoughts
excerpt_separator: "<!--more-->"
tags:
  - science
  - physics
  - thoughts
image_sliders:
  - slider20131112
---

In this post I would like to introduce a rather interesting topic especially for those who’re concerned about how nature works but are not majoring in theoretical physics. I do not hold any degree in physics yet, so this post is going to be just a glance of a pretty much amateur, fresh undergrad, who is currently working on several very narrow theoretical physics problems. Hence, of course, I want to obtain an adequate feedback and harsh criticism, as I believe there are many people who know these topics better than I do. The main purpose of this outline is to provoke a discussion between those who care.

![pic1](/assets/images/2013-dissipative-mech/pic1.gif)

<!--more-->

For those not majoring in physics, there may appear several unknown words in the title, so let’s first review all of them before moving forward to the problem itself.

What is “statistical mechanics”? As you probably know from school, mechanics is a science (sometimes rashly considered as a part of physics) about the movement and evolution of elementary and complex objects and systems under the impact of some abstract forces. Statistical mechanics, however, is a science about the determination of statistical characteristics of complex (multi-particle) systems. When you have a system with, say, billions of particles, there is no need to know about the coordinate and velocity of every single particle, because you still cannot determine them experimentally. Instead, it would be more useful to know what portion of particles in that system have particular energy, or how many of them are in a given part of the box etc. So these are the statistical characteristics of the system. Those who are familiar to physics may call to mind the energy distribution function and number density.

![pic1](/assets/images/2013-dissipative-mech/pic2.jpg)

The second unknown concept is “dissipative”. When you give an initial impulse to a piece of wood on the table, it would stop soon after being pushed, losing its initial energy. Without going deep into the reasons of stop, we will call this stopping process the dissipation. The same phenomena can be observed by simply putting a glass of hot water on the kitchen table. After a while it will lose heat getting colder and colder until it finally gets the room temperature. This process of energy spill is called the dissipation process, when the energy from smaller parts of our system are being permeated into the whole macroscopic system.

So coming back to our topic, what is the characteristic feature of dissipative processes? One can notice, that, i.e., if you have a process where the dissipation is quite weak like colliding billiard balls, you can invert all the velocities of the balls, and they will come to their initial positions. Well, of course, if you neglect the tension with the table, these balls will never stop, but that’s not the point. However, the main thing is, that processes described by the laws of classical mechanics are time-invertible (the inversion of time is the same as the inversion of velocities)! That comes from the time-invariance of Newton’s law.

\begin{equation}
m\mathbf{a} = m\ddot{\mathbf{r}} = m\frac{\mathrm{d}^2\mathbf{r}}{\mathrm{d}t^2} = \mathbf{F}~~~(t\to -t~\mathrm{invariant})
\end{equation}

On the other hand, one can consider a balloon with some gas bursting in a large room. No matter how long you wait, the gas will never come back to gather into the balloon. In physics this phenomena is called the second law of thermodynamics, or the law of the entropy increasing. Entropy in physics is effectively the measure of randomness and chaotic state of the system. The higher the entropy, the more chaotic the system is. And the second law of thermodynamics says, that in general physical systems the entropy can only increase, so the measure of chaos of the system can only get higher and higher by the time. Boltzmann was the first to derive this law in XIX century, and there is even further derivation from more general and precise ideas by Bogolyubov in 1946.

But hey, if the classical mechanics in its origin is time-invariant, and the statistical mechanics is just a generalization of classical mechanics for the systems of many particles, then why something being a derivative of something time-invariant is NOT time-invariant? Well, this a quite complicated paradox that has not been answered carefully during so many years. The thing is, that any sort of derivation of the 2-nd law of thermodynamics contain in its very origins statistical, hence nondeterministic origins, which in further evolution of the theory leads to non-time-invariant laws like entropy increasing law.

Of course, advanced ones might say that in any case there are quantum nondeterministic effects that anyway play some role on time evolution of the system. Thus, these effects can lead to non-time-invariant processes, and from the glance of quantum mechanics, there is no paradox at all. However, first, statistical nature of these processes is appeared to be characteristic even without quantum consideration, as the basic statistical mechanics is simply a derivative of classical mechanics. And moreover, in statistical systems, like air in our rooms, quantum effects are extremely weak and neglectable, as the temperature is quite high enough and the density of air molecules is pretty low.

The question we’d like to review now is, how to deal with this paradox, and what are the possible solutions for it. Well, of course there are just numerous possible answers and speculations about this question. But I’d like to introduce, in my opinion, the most refined and understandable one. So the question is, why the entropy can only increase, and why the gas leaked out of balloon will never get back to its original form of the balloon? The one possible answer is, it will eventually get back, we just can’t wait that much. You see, there is a mathematical theorem relating to dynamical systems defined by ordinary differential equations called Poincaré reccurence theorem. It states that certain systems will, after a sufficiently long but finite time, return to a state very close to the initial state. And the Poincaré recurrence time is the length of time elapsed until the recurrence. Of course, this time may vary greatly depending on the exact initial parameters and degrees of freedom of our system, but the keyword in this theorem is the word “finite”. So for the system of balloon in the room Poincaré time may appear to be larger than the age of the Universe, but it will still be finite theoretically.

Another more visual explanation of the paradox was demonstrated by one of my professors in Lebedev Physical Institute. Those who remember physics demonstrations at school can memorize an interesting experiment with a device called a coupled pendulum: two bobs with a spring connecting them hanged on rods, that are free two oscillate around one of their ends.

![pic1](/assets/images/2013-dissipative-mech/pic3.png)

If you push one of these bobs, you will see an interesting kind of motion. During some time, one of these bobs will oscillate intensively, and the other one will nearly rest. After that, the one resting will start to oscillate, and the other one will nearly stop, reversing this process back and forth. So talking physically, we’ll say that these bobs are oscillating with opposite phases. Graphically this fact can be represented by this plot of the position of two bobs during time. As you can see, when one of these bobs is nearly at rest, the amplitude of the other one is in its highest value.

{% include slider.html selector="slider20131112" %}

I made an animation of this pendulum system in Wolfram Mathematica ([link](/assets/files/2013-diss-mech/coupled pendulum.nb) to `.nb` file). The spring is represented by a dashed line between two black bobs.

![pic1](/assets/images/2013-dissipative-mech/pic6.gif)

But how is this connected with the problem of dissipative statistical mechanics and Poincaré recurrence time? Well, the one thing you need to do in order to understand it, is to put a light bulb on one of these bobs and turn off the environment light in the room. What will happen is that you’ll see the motion of just one of these bobs, and for a person who’s not aware of the second bob, the motion of the light one will appear very strange and will definitely look something that is very like to dissipation. But then hey, after it stops, it starts oscillating again! This weird motion is incredibly hard to explain without any idea about the second bob.

![pic1](/assets/images/2013-dissipative-mech/pic7.gif)

So returning to the questions of Poincaré recurrence, what if there is some another non-observable degree of freedom (like the second bob in the coupled pendulum), that will make our system to dissipate and then get back to its normal motion repeatedly. And what if that second bob in our case is so heavy, that we can’t even observe its motion. Well, nobody knows this certainly, but this idea and its visual interpretation seemed to me interesting, and definitely worth sharing with others.
