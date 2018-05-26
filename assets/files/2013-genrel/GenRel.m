(* ::Package:: *)

BeginPackage["GenRel`"]
IMetric::usage = "IMetric[g], with g an n.n-matrix (two lower indices),\n  returns the inverse metric (two upper indices)."
Christoffel::usage = "Christoffel[g,x], with g a n.n-matrix and x\n  n-vector of coordinates, gives the Christoffel symbol of the 2nd\n  kind (1st upper, two lower indices)."
Riemann::usage = "Riemann[g,x], with g a n.n-matrix and x n-vector of\n  coordinates, gives the Riemann tensor (1st upper, three lower\n  indices)."
Ricci::usage = "Ricci[g,x], with g a n.n-matrix and x n-vector of\n  coordinates, gives the Ricci tensor (two lower symmetric indices)."
SCurvature::usage = "SCurvature[g,x], with g a n.n-matrix and x\n  n-vector of coordinates, gives the Scalar Curvature."
EinsteinTensor::usage = 
  "EinsteinTensor[g,x] with g a nxn-matrix\n  (the metric with lower indices) and x n-vector (the coordinates)\n  gives the Einstein tensor (a nxn-matrix) with lower indices."
SqRicci::usage = "SqRicci[g,x], with g a n.n-matrix and x\n  n-vector of coordinates, gives the norm-square of the Ricci tensor."
SqRiemann::usage = "SqRiemann[g,x], with g a n.n-matrix and x\n  n-vector of coordinates, gives the norm-square of the Riemann tensor."
ChristoffelCmp::usage = "ChristoffelCmp[g,x], with g a n.n-matrix and x\n  n-vector of coordinates, gives the Christoffel's symbol in components."
RiemannCmp::usage = "RiemannCmp[g,x], with g a n.n-matrix and x\n  n-vector of coordinates, gives the Riemann thensor's components."
helpGenRel::usage = "GenRel functions are: IMetric, Christoffel, ChristoffelCmp, RiemannCmp,\n  Riemann, Ricci, SCurvature, EinsteinTensor, SqRicci, SqRiemann."
Begin["`Private`"]
IMetric[metric_] := Simplify[Inverse[metric]]; 
Christoffel[metric_, x_] := Block[{Dim, iMet, PreChristoffel, Christoffel, i, j, k}, Dim = Length[x]; iMet = IMetric[metric]; 
    PreChristoffel = Table[D[metric[[k,i]], x[[j]]] + D[metric[[j,k]], x[[i]]] - D[metric[[i,j]], x[[k]]], {k, Dim}, {i, Dim}, {j, Dim}]; 
    PreChristoffel = Simplify[PreChristoffel]; Christoffel = iMet . PreChristoffel/2; Simplify[Christoffel]]
Riemann[metric_, x_] := Block[{Dim, iMet, ChrisSymbol, Riemann, PreRiemann, a, b, c, i, j, k}, Dim = Length[x]; iMet = IMetric[metric]; ChrisSymbol = Christoffel[metric, x]; 
    PreRiemann = Table[D[ChrisSymbol[[a,i,c]], x[[b]]] + Sum[ChrisSymbol[[k,i,c]]*ChrisSymbol[[a,k,b]], {k, Dim}], {a, Dim}, {i, Dim}, {b, Dim}, {c, Dim}]; 
    Riemann = Table[PreRiemann[[a,i,b,c]] - PreRiemann[[a,i,c,b]], {a, Dim}, {i, Dim}, {b, Dim}, {c, Dim}]; Simplify[Riemann]]
Ricci[metric_, x_] := Block[{Dim, Riem, Ricci, a, i, j}, Dim = Length[x]; Riem = Riemann[metric, x]; Ricci = Table[Sum[Riem[[a,i,a,j]], {a, Dim}], {i, Dim}, {j, Dim}]; 
    Simplify[Ricci]]
SCurvature[metric_, x_] := Block[{Dim, iMet, CurvatureScalar, i, j}, Dim = Length[x]; iMet = IMetric[metric]; CurvatureScalar = Tr[iMet . Ricci[metric, x]]; 
    Simplify[CurvatureScalar]]
EinsteinTensor[metric_, x_] := Simplify[Ricci[metric, x] - (1/2)*SCurvature[metric, x]*metric]; 
SqRicci[metric_, x_] := Block[{Dim, iMet, Ric, RRicci, i, j, k, l}, Dim = Length[x]; iMet = IMetric[metric]; Ric = iMet . Ricci[metric, x]; RRicci = Tr[Ric . Ric]; 
    Simplify[RRicci]]
SqRiemann[metric_, x_] := Block[{Dim, iMet, Riem, RRiem, i, j, k, l, m, n, p, q}, Dim = Length[x]; iMet = IMetric[metric]; Riem = Riemann[metric, x] . iMet; 
    RRiem = Sum[Riem[[i,j,l,k]]*Riem[[l,k,i,j]], {i, Dim}, {j, Dim}, {k, Dim}, {l, Dim}]; Simplify[RRiem]]
ChristoffelCmp[met_, coord_] := 
  Block[{i, j, k}, For[i = 1, i <= Length[coord], i++, 
     {For[j = 1, j <= Length[coord], j++, {For[k = 1, k <= Length[coord], k++, {If[Christoffel[met, coord][[i,j,k]] == 0, Continue[]], 
            Print["\[CapitalGamma][", i, ",", j, ",", k, "]=", Simplify[Christoffel[met, coord][[i,j,k]]]]}]; }]; }]; ]
RiemannCmp[met_, coord_] := Block[{i, j, k, l}, 
   For[i = 1, i <= Length[coord], i++, 
     {For[j = 1, j <= Length[coord], j++, {For[k = 1, k <= Length[coord], k++, {For[l = 1, l <= Length[coord], l++, {If[Riemann[met, coord][[i,j,k,l]] == 0, Continue[]], Print[
                "R[", i, ",", j, ",", k, ",", l, "]=", Simplify[Riemann[met, coord][[i,j,k,l]]]]}]; }]; }]; }]; ]
helpGenRel := Print["GenRel functions are: IMetric, Christoffel, ChristoffelCmp, RiemannCmp,\n  Riemann, Ricci, SCurvature, EinsteinTensor, SqRicci, SqRiemann."]; 
End[]
EndPackage[]
helpGenRel
Print["Enter 'helpGenRel' for this list of functions"]



