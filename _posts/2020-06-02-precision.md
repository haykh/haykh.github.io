---
layout: post
title:  Weirdness of number systems [or] Why 0.1 + 0.2 is not 0.3?
date:   2020-02-06 19:07:00 -0400
categories: Thoughts Science
excerpt_separator: "<!--more-->"
tags:
  - science
  - code
  - thoughts
---

Could try something for me? Open up any interactive console, like `python`, `js` console in your web browser, `ghci` terminal for `haskell`, or even write a short code on `c++`/`fortran` or whatever you love (you can actually do directly in your web browser using this [website](https://repl.it)). Now type `0.1 + 0.2` and hit `enter`. Here's what you will most likely see:

```python
# python
>>> 0.1 + 0.2
0.30000000000000004
```

```js
// js
> 0.1 + 0.2
< 0.30000000000000004
```

```haskell
-- haskell
Prelude> 0.1 + 0.2
Prelude> 0.30000000000000004
```

```mathematica
(* mathematica *)
In[1]:= 0.1 + 0.2
Out[1]= 0.30000000000000004`
```

```c++
// c++
(0.1 + 0.2 == 0.3) // false
```

```fortran
! fortran90
print *, 0.1 + 0.2
! 0.300000012
```

But why? Typical answer I got when asking people about this is, well, "what a silly question, that just a roundoff error or a precision for you arythmetic"...

That doesn't help, right? In fact, if you try the same trick with `0.25 + 0.5` you will get what you expect: `0.75`. So why is indeed `0.1 + 0.2` so special (and is it?), and why on earth the roundoff error occurs in some occasions and not in others? Let's dig deeper.

<!--more-->

### Childhood

When you start attending elementary school it typically takes a year or two to get used to this weird new concept of number. Symbols which represent quantities and measures, which you can juggle around to know how long a train has traveled in 2 hours, or how many watermelons did Jack end up buying from the groceries.

It might take another few years to start learning that actually `one`-s and `two`-s and `three`-s etc are not telling the whole story. Like what happens if you have a pizza and two friends around? How many "pizzas" does each one of you get? It's obviously less than one, right? But... What's less than one? And then you learn there are these weird looking numbers called fractions. If at that point you're not desparately running away from your math classes you might also learn these numbers come in two different flavors: fractions with a numerator and a denominator, and fractions in decimal notation.

Now the first one is pretty obvious, right? Say, you got $$1/3$$, this means you take a pizza, try to cut it into three equal pieces then take just one of them. Likewise, what about $$\$~5/4$$? Well that's a full dollar with a single extra quarter (where conveniently four quarters is a dollar!).

### Adolescence

So far so good, but then they teach you about decimal notation, where the weird symbol $$0.5$$ means the same thing as the neat and tidy $$1/2$$. Well... that particular case might be at least distantly intuitive, since 5 is sort of half the way from 0 to 10, so it kind of makes sense it means **half**. But then you disappointingly learn that, say, $$1/3$$ is not just $$0.3$$, and not even $$0.3333$$. Rather, you have to have infinitely many $$3$$-s after the dot in your decimal notation.

$$
\frac{1}{3} = 0.3333333....
$$

But how come such a simple thing as just a third of a whole require infinitely many digits to express? Isn't that insane and doesn't it sound like an overcomplication? I mean, why do we even bother writing $$\$~4.99$$ on our pricetags, when we could just simply do:

$$
\$~4\frac{99}{100},
$$

which is essentially the same. Even more, we could even have a third of a dollar:

$$
\$~\frac{1}{3}.
$$

Whereas to write it with a decimal notation you'd need an infinitely long pricetag.

### Adulthood

Now let's first try to understand why we need decimal notation at all. Think of the population of Estonia. Let's say we are able to count every single person in Estonia and end up having $$1 326 185$$ people. Ok, but that number is probably a bit too precise. How about we say it's about one million? Now that's a bit vague, isn't it. It could be 1 million 900 thousand or 1 million and 10 thousand. So maybe let's be a bit more precise, but not "completely" precise up to every single man? But... how do you do that?

And this is where the handiness of decimal notation kicks in. You can just say, $$1\cdot 10^6 + 326\cdot 10^3$$, which can be neatly written as $$1.326$$ million. Cool, right? Now, to be fair, you could write the same thing as:

$$
1\frac{326}{1000}~\text{million},
$$

but... let's be honest. This doesn't look nearly as cool. Need a slightly more precise number? Here you go, just add another digit: $$1.3262$$ (yes, you round $$1$$ into $$2$$, because the next number is $$8$$).

### Maturity

Ok, this decimal system might not actually be that bad. Now why exactly do we need infinitely many $$3$$-s to write down $$1/3$$? Well... imagine a number like this: $$1.23456$$. What this really means is

$$
1.23456 = 1 + 2\cdot \frac{1}{10} + 3\cdot \frac{1}{100} + 4\cdot \frac{1}{1000} + 5\cdot \frac{1}{10000} + 6\cdot \frac{1}{100000}.
$$

And so in general, if you have a number written in this way, $$a_0.a_1 a_2 a_3 a_4 a_5 a_6 a_7...$$, it actually means

$$
\begin{eqnarray}
a_0.a_1 a_2 a_3 a_4 a_5 a_6 a_7... &=&a_0\cdot \frac{1}{10^0} + a_1\cdot \frac{1}{10^{1}} + a_2\cdot \frac{1}{10^{2}} + a_3\cdot \frac{1}{10^{3}} + ... =\\
  &=&\sum\limits_{n=0} a_n\cdot \frac{1}{10^{n}}
\end{eqnarray}
$$

> Numbers $$a_0$$, $$a_1$$, $$a_2$$ are some single digit numbers, from $$0$$ to $$9$$.

If you've learned anything about infinite series in your undergrad, this is the place where you remember it. Stuff we are going to discuss in this "maturity" paragraph is... well... mature, so if you feel like you've lost -- just skip this part.

Now you can think of these $$1/10^n$$ as some basis functions, and $$a_n$$ as your coefficients. Just like in Fourier series you have $$e^{2\pi i n}$$ (for $$x=1$$). And basically any number can be decomposed in this basis. For example, $$0.5$$ will have only one nonzero coefficient, $$a_1 = 5$$, while the rest is zero. For $$0.25$$ we have $$a_1 = 2$$ and $$a_2 = 5$$, while the rest is again zero. And here's where $$1/3$$ comes into play: it turns out that to decompose $$1/3$$ into this basis you'd need infinitely many coefficients. In other words:

$$
\frac{1}{3} = 0\cdot \frac{1}{10^0} + 3\cdot \frac{1}{10^{1}} + 3\cdot \frac{1}{10^{2}} + 3\cdot \frac{1}{10^{3}} + ... = \sum\limits_{n=1}^{\infty} 3\cdot \frac{1}{10^{n}}.
$$

This might sound counterintuitive, right? $$1/3$$ is a simple number. Why do we need infinite series? Well... because of the basis. Think of Fourier series; the functions in Fourier series are smooth, so representing even simple but pointy things like a step function (like the one shown below) will require infinitely many sine waves. Simply because you can't just add a few smooth functions and get something sharp. You'll have to add infinitely many. For the same reason you can't add a bunch $$1/10$$-s, $$1/100$$-s, $$1/1000$$-s etc and get something that's equal to $$1/3$$, you'll have to have infinitely many.

<figure>
<img src="/assets/images/2020-precision/fourier.gif" width="60%">
<imgsrc><a href="https://sites.google.com/a/georgiasouthern.edu/julia-inozemtseva/teaching-math-animations-and-pics">Source</a></imgsrc>
</figure>

### Computers

Now hold on. What does this whole fairytale have to do with computers not being able to do simple arithmetic? Imagine you built a computer, the one that can only store natural numbers from $$0$$ to $$9$$ and perform all kinds of arithmetics with these numbers. Let's say you want to teach your computer what you've learned in your elementary school -- fractions! Remember, the computer can only count from $$0$$ to $$9$$, so it has no idea what $$14$$ or even $$10$$ means.

But the computer can store arrays! So the number $$3.141592$$ can be put in an array as such: `[3,1,4,1,5,9,2]`, so that you only deal with the numbers your computer already know (as long as you keep track where the dot `.` has to go, but for now let's just assume the dot is after the first one). If you need to add two fractional numbers, like $$0.45$$ and $$0.13$$, you just add corresponding arrays element-by-element: `[0,4,5] + [0,1,3] = [0,5,8]`, which conveniently is $$0.58$$. In case if it overflows, you just add the remainder to the next element, like when you do $$0.24+0.18$$: `[0,0,4]+[0,0,8]=[0,1,2]`. Keep in mind, that the computer actually doesn't know what `10` or `100` means. And it doesn't have to; the only thing it knows are the numbers from `0` to `9` and how to combine them into arrays.

So far so good. If you try adding $$0.1+0.2$$ on such a computer, it will always produce our beloved $$0.3$$, since `[0,1]+[0,2]=[0,3]`. The problem is, in real life computers don't know how to count to $$10$$. In fact they only know how to count to $$2$$, as the only two numbers they can store is `0` and `1` (signal **ON** and signal **OFF**). So a number $$3$$ cannot be written with a single digit, you'd have to write $$11$$, which the computer will store as `[1,1]`. Number $$4$$ will then be `[1,0,0]`, etc. This is called a binary system (or base $$2$$ system), and I'm not going to focus on all the wonders it carries.

Instead let's focus on fractional numbers. Now remember in base $$10$$ we would decompose our fraction into a sum of coefficients, multiplied by $$1/10$$, $$1/100$$, etc. In base $$2$$ we can do a very similar thing by decomposing our number like so:

$$
\begin{eqnarray}
a_0.a_1 a_2 a_3 a_4 a_5 a_6 a_7... &=&a_0\cdot \frac{1}{2^0} + a_1\cdot \frac{1}{2^{1}} + a_2\cdot \frac{1}{2^{2}} + a_3\cdot \frac{1}{2^{3}} + ... =\\
  &=&\sum\limits_{n=0} a_n\cdot \frac{1}{2^{n}}
\end{eqnarray}
$$

> Keep in mind, numbers $$a_0$$, $$a_1$$ etc can only be $$0$$-s or $$1$$-s, since our computer has no idea what $$2$$, $$3$$, or let alone $$12$$ means.

Now again, just like for the base-`10` computer, our base-`2` computer itself has no idea what the numbers `2` or `4` or `8` mean. The only thing it knows are numbers from `0` to `1` and how to combine them into arrays! So basically, when we write the number `0.00110` the computer will store it as an array `[0,0,0,1,1,0]`. To convert it to a human readable base-`10`, you'd simply perform the summation:

$$
0\cdot \frac{1}{2^0} + 0\cdot \frac{1}{2^1} + 0\cdot \frac{1}{2^2} + 1\cdot \frac{1}{2^3} + 1\cdot \frac{1}{2^4} + 0\cdot \frac{1}{2^5} = 0.1875~(\text{in base}~10).
$$

### So why `0.1 + 0.2 != 0.3`?

Now we approach to the very root of the problem. What happens when you tell the computer to store the number `0.1` (spelled in $$10$$)? As we discussed, the computer doesn't know base-`10`, so it converts the number into binary. And that's where the problem comes. See, to express $$0.1$$ in binary you'd have to have infinitely many `1`s and `0`s. Just like for the $$1/3$$ in base-$$10$$ case! It turns out, that `0.1` in binary will be `0.0001100110011...` (where the pattern `0011` repeats forever). So to store this number the computer would have to have an infinite array `[0,0,0,0,1,1,0,0,1,1,...]`, so presumably an infinite storage space.

Unsurprisingly, computers never possess infinite storage space. Instead they will likely cut the number they get after converting our input into a certain quantity of bits. In this case let's just assume our computer stores fractional numbers into an array of length `8`, or 8-bits or what people typically call a **byte**! In this case if we input `0.1` it will convert into binary and store just the first 8 bits: `[0,0,0,0,1,1,0,0]`.

The problem is... it lost all the other digits, while the number it stores is not actually a `0.1` we gave. If you were reading carefully until now, you might realize, that this number is actually $$1/16 + 1/32$$ which is $$0.09375$$. Pretty close to $$0.1$$, but not exactly.

Now when you input the next number, `0.2`, it will perform the whole magic again storing only 8 bits: `[0,0,0,1,1,0,0,1]`. Now again, if you convert this back, you'll get $$1/8+1/16+1/128$$ which is $$0.1953125$$, close to $$0.2$$, but not exactly.

What the computer does next is it takes these two bytes of information number `[0,0,0,0,1,1,0,0]` and `[0,0,0,1,1,0,0,1]` and sums them up as it was taught: element-by-element. `[0,0,0,0,1,1,0,0]+[0,0,0,1,1,0,0,1]=[0,0,1,0,0,1,0,1]`. It then converts the answer to base-`10` and returns. The problem is... that's not `0.3`, if you convert `[0,0,1,0,0,1,0,1]` to base-`10` you'll get $$0.289063$$. Again, close to $$0.3$$, but not exactly. So if your computer were storing 8 bits of data for each fraction, if you were to enter `0.1+0.2` it would return `0.289063`.

But computers don't store fractional numbers in just 8 bits. For a typical `python` by default the computer stores 64 bits for to represent a fractional number. Some of those bits store the sign of your number as well as the position of the dot (`.`), while 53 of these bits store actual numbers. So when you enter `0.1` it will convert it into a binary like this: `0.000110011...`. If you convert it back into base-`10` you'll see something like this:

$$
0.1000000000000000055511151231257827021181583404541015625
$$

Again, this is pretty darn close to $$0.1$$. Something similar happens for `0.2`, and the when add up the results you get the `0.30000000000000004` which we've seen above.

> Notice that the number it stores is $$>0.1$$. But if you were to just truncate the infinitely long binary representation it could not have possibly been greater than the original number. This is because instead of a truncation computer performs some rounding of a binary number. Read more about that [here](https://www.wikiwand.com/en/IEEE_754#/Rounding_rules).

### Sidenotes

You can actually see this in `python` where you can conveniently use `numpy` library to control how many bits does it use to store your number:

```python
>>> import numpy as np
>>> np.float16(0.1) + np.float16(0.2)
0.2998
>>> np.float32(0.1) + np.float32(0.2)
0.3
>>> np.float64(0.1) + np.float64(0.2)
0.30000000000000004
```

It so happens, that for `32`-bit the truncation + roundoff works in such a way that having less bits actually helps you by coincidence to have the exact answer printed out. But that's just an illusion :) There is actually a whole website, [0.30000000000000004.com](https://0.30000000000000004.com), dedicated to this topic with lots of examples from different programming languages.

---

I guess as a conclusion we can see... computers aren't random. They are not unpredictable. Even if sometimes their behavior might seem like the program is living its own life -- it isn't. The program is executing exactly what you ask it to execute, without exceptions. The thing to keep in mind is, between you and the computing unit which actually does the job there is a vast variety of protocol layers (programmed by other people) which accept your input, interpret it and try to translate it into a language that computer understands. And that process, while being totally deterministic and predefined, can nevertheless be confusing if you are unfamiliar with what it exactly does.

So... if something doesn't make sense -- dig deeper.

PS. Oh and... I couldn't resist to make this neat animation on what you've just read. Basically a tl;dr version of this text. Feel free to share.

<figure>
<img class='giffer-gif' data-gifffer="/assets/images/2020-precision/anim.gif" data-gifffer-alt="anim.gif" width="100%">
<imgsrc>Made with the <a href="https://github.com/3b1b/manim"><code class="highlighter-rouge">manim</code></a> animation library.</imgsrc>
</figure>
