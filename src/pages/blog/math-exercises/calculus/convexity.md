---
title: "関数の凸性と差商の単調性"
date: "2025-09-29"
category: "数学演習"
layout: ../../../../layouts/BlogPostLayout.astro
---

# 凸性と差商の単調性

**命題（凸性と差商の同値）**  
区間 $I \subset \mathbb{R}$ 上の関数 $f$ について、次の二条件は同値である。

**条件1：狭義凸（strictly convex）**  

$$
f(tx + (1-t)y) < t f(x) + (1-t) f(y), \quad \forall x \neq y, \; t \in (0,1)
$$

**条件2：差商が strictly 単調増加**  

$$
\frac{f(z)-f(x)}{z-x} < \frac{f(y)-f(x)}{y-x} < \frac{f(y)-f(z)}{y-z}, \quad \forall x<z<y
$$

---

## 証明（概略）

**(1) ⇒ (2)**  

任意の $x<z<y$ に対して、$z$ を $x$ と $y$ の内分点として

$$
z = (1-\lambda)x + \lambda y, \quad \lambda \in (0,1)
$$

と書くことができる。狭義凸性より

$$
f(z) < (1-\lambda) f(x) + \lambda f(y)
$$

両辺から $f(x)$ を引き、正の数 $z-x = \lambda (y-x)$ で割ると

$$
\frac{f(z)-f(x)}{z-x} < \frac{f(y)-f(x)}{y-x}
$$

右側も同様に整理すれば、差商が strictly 単調増加することが分かる。

**(2) ⇒ (1)**  

任意の $x\neq y$ と $t \in (0,1)$ に対して

$$
z = t x + (1-t) y
$$

と置く。差商の strict 増加より

$$
\frac{f(z)-f(x)}{z-x} < \frac{f(y)-f(x)}{y-x}
$$

両辺に $z-x>0$ を掛けると

$$
f(z) < (1-t) f(x) + t f(y)
$$

すなわち狭義凸性が得られる。  
$\square$

---

### 補足

この命題は、凸性を微分に頼らず平均変化率（差商）の単調性で表現した同値条件である。  
$f \in C^2$ であれば、狭義凸性 $\Rightarrow f''>0$ が成立する場合もあるが、必要条件ではない。
