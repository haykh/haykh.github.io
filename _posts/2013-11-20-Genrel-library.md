---
layout: post
title:  Manual for "genrel.m" library
date:   2013-11-20 03:44:00 -0400
categories: Science Code
excerpt_separator: "<!--more-->"
tags:
  - science
  - physics
  - code
---

This library contains the full package of Wolfram Mathematica commands to work with the mathematical apparatus of general theory of relativity. It is an open source library and can be downloaded from [here](/assets/files/2013-genrel/GenRel.m).

<!--more-->

> Russian manual can be found [here](/assets/files/2013-genrel/GenRel_manual.pdf).

<img src="/assets/images/2013-genrel/pic1.jpeg" width="50%"/>

First one needs to import this library by using:

```
Get["full/path/to/GenRel.m"]
```

or simply:

```
<< full/path/to/GenRel.m
```

The following text should appear after that:

```
"GenRel functions are: IMetric, Christoffel, ChristoffelCmp, RiemannCmp,
Riemann, Ricci, SCurvature, EinsteinTensor, SqRicci, SqRiemann."

Enter helpGenRel for this list of funcions
```

These are all the functions represented in this library.

Ok, first, one should introduce the coordinate frame, i.e., in case of spherical coordinates:

```
coord = {t, r, \[Theta], \[Phi]};
```

The `coord` name is of course not important, it’s just a notation for this particular list of the format `{*, *, *, *}`.

Next we should define the metric tensor - usually square $$n\times n$$ matrix (i.e. $$4\times 4$$) consisted of the components of metric tensor:

```
metric = { {-1,0,0,0}, {0,1,0,0}, {0,0,1,0}, {0,0,0,1} };
```

Or for diagonal matrix we may also use:

```
metric = DiagonalMatrix[{-1, 1, 1, 1}];
```

Again the `metric` name is not so important here. We now can calculate all the necessary functions and parameters for our geometry.

- inverse metric tensor:
```
IMetric[metric]
```
- Christoffel coefficients in the for of multidimensional list:
```
Christoffel[metric,coord]
```
- nonzero components of `Г[1,2,3]`:
```
ChristoffelCmp[metric,coord]
```
- nonzero components for the Riemann tensor `R[1,2,3,4]`:
```
RiemannCmp[metric,coord]
```
- Riemann tensor itself:
```
Riemann[metric, coord]
```
- Ricci tensor:
```
Ricci[metric,coord]
```
- scalar curvature:
```
SCurvature[metric,coord]
```
- Einstein tensor:
```
EinsteinTensor[metric,coord]
```
- square of Ricci tensor’s norm:
```
SqRicci[metric,coord]
```
- square of Riemann tensor’s norm:
```
SqRiemann[metric,coord]
```

### Example

As an example we can consider the RWJ-metrics for a homogeneous and isotropic universe in spherical coordinates:
\begin{equation}
ds^2=-c^2\mathrm{d}t^2 + a^2(t)\left[\frac{\mathrm{d}r^2}{1-kr^2}+r^2\left(\mathrm{d}\theta^2 + \sin^2{\theta}\mathrm{d}\phi^2\right)\right]
\end{equation}

Let’s first import our library, define the coordinate reference frame and metric:

```
<< GenRel.m

sph={t,r,\[Theta],\[Phi]};

met=DiagonalMatrix[{-c^2,a[t]^2/(1-k r^2),a[t]^2 r^2,a[t]^2 r^2 Sin[\[Theta]]^2}];

(* comment:  a[t] - scalar factor, k - curvature parameter *)

met // MatrixForm (* comment: this will display metric in matrix form *)
```

Now we can easily obtain nonzero components of Christoffel tensor for our metric:

```
ChristoffelCmp[met,sph]
```

We can also get the Ricci tensor and the scalar curvature:

```
Ricci[met,sph] //MatrixForm

SCurvature[met,sph] //Expand

(* comment: 'Expand’ separates factors *)
```

## Comments

By typing `helpGenRel` one can get the whole list of functions. The command `?FunctionName` (e.g. `?Christoffel`) gives the definition of the function.

Greek letters can be entered by using: `Esc + ? + Esc` without plus signs. I.e. `Esc + a + Esc` (without spaces) gives us $$\alpha$$.
