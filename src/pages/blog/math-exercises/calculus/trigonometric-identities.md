---
title: 三角関数の公式導出
description: 三倍角公式の導出過程
---

# 三角関数の公式導出

## 三倍角公式の導出

### sin(3A)の導出

まず加法定理からスタート：

$$\sin(3A) = \sin(2A + A)$$

加法定理を使うと：

$$\sin(3A) = \sin(2A)\cos A + \cos(2A)\sin A$$

倍角公式を代入：

$$\sin(3A) = (2\sin A\cos A)\cos A + (\cos^2 A - \sin^2 A)\sin A$$

整理すると：

$$\sin(3A) = 2\sin A\cos^2 A + \sin A\cos^2 A - \sin^3 A = 3\sin A\cos^2 A - \sin^3 A$$

$\cos^2 A = 1 - \sin^2 A$ を代入してスッキリ：

$$\sin(3A) = 3\sin A(1 - \sin^2 A) - \sin^3 A = 3\sin A - 4\sin^3 A$$

### 最終的な三倍角公式

$$\boxed{\sin(3A) = 3\sin A - 4\sin^3 A}$$

この公式は三角関数の重要な恒等式の一つで、複素解析や微分方程式の解法でも頻繁に使用されます。