Skyline Plotter  Code Challenge

From Daily Code Challenges.


The skyline of a city is composed of several buildings of various widths and heights, possibly overlapping one another when viewed from a distance. We can represent the buildings using an array of (left, right, height) tuples, which tell us where on an imaginary x-axis a building begins and ends, and how tall it is. The skyline itself can be described by a list of (x, height) tuples, giving the locations at which the height visible to a distant observer changes, and each new height.

Given an array of buildings as described above, create a function that returns the skyline.

For example, suppose the input consists of the buildings [(0, 15, 3), (4, 11, 5), (19, 23, 4)]. In aggregate, these buildings would create a skyline that looks like the one below.
```
     ______  
    |      |        ___
 ___|      |___    |   | 
|   |   B  |   |   | C |
| A |      | A |   |   |
|   |      |   |   |   |
------------------------
```

As a result, your function should return [(0, 3), (4, 5), (11, 3), (15, 0), (19, 4), (23, 0)]

- - - - - - - - - - - - - - - - - - - - - - - -

My analysis:

Looking at the values of the expected output

Given: 
- buildings in the format of [start, height, end].
- multiple buildings can exist
- buildings can go in front of others
- endpoints can behind other buildings
- our output is an array of 2 length arrays.
- each output shows a change in the outline's height

Assumed:

Inputs/outputs/representations/situtations

Situation 1: No buildings

Input = []

Output = [ [0,0] ]

Drawing

```

_________________________
```

Situation 2: Building starts not at 0

Input = [[3,10,5]]

Output = [ [0,0] , [3,10] , [5,0] ]

Drawing
```
    __________
   |          |
   |    A     |
   |          |
   |          |
___|__________|

````

Situation 3: 2 buildings.  Building1 starts at 0, Building2 does not overlap

Input  = [[0,6,2],[7,9,1]]

Output = [,[0,2],[6,0],[7,1],[9,0]]

Drawing
```
 ______
|   A  |     __
|______|____|_B|

````

Situation 4: 2 buildings same height side by side

Input: [0,3,2][3,6,2]

Output: [[0,2],[6,0]]

```
 ___ ___
| A | B |
|___|___|__

````

Situation 5: Out of order Next to each other

Input:[[3,6,5],[0,3,7]]

Output:

Drawing
```
 ___
|   |
|   |___
|   |   |
|   |   |
| B | A |
|   |   |
|___|___|
```


Situation 6: One building in front of the other


Input: [[0, 15, 3], [4, 11, 5]]

Output:[[0,3],[4,5],[11,3],[15,0]]

Drawing
```
     ______  
    |      |    
 ___|      |___ 
|   |   B  |   |
| A |      | A |
|___|______|___|

```
Situation 7: Overlapping buildings


Input: [[0, 15, 3], [0, 11, 5]]

Output:[[0,3],[4,5],[11,3],[15,0]]

Drawing
```
 __________ 
|          |    
|          |___ 
|     B    |   |
|          | A |
|__________|___|

```

