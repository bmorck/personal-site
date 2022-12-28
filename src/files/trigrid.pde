int frac = 50 * Math.sqrt(3) / 2;
int sideLength = 50;
int XPos = 0;
int YPos= 0;

ArrayList<TriangleClass> triangles;

color[] colors = {#f0f8ff, #fff0f5, #ffdab9};


void setup() {
  size(500,500);
  background(#D3D3D3);
  strokeWeight(1);
  triangles = new ArrayList<TriangleClass>();
  for(int XPos=0;XPos<500;XPos=XPos+(2*frac)) {
    for (int YPos=0;YPos<500;YPos=YPos+50) {

      triangles.add(new TriangleClass(XPos, YPos, XPos, YPos+sideLength, XPos+frac, YPos+(sideLength/2), #ffffff));
      triangles.add(new TriangleClass(XPos + frac, YPos+(sideLength/2), XPos+(2*frac), YPos, XPos+(2*frac), YPos+sideLength,#ffffff));
      triangles.add(new TriangleClass(XPos, YPos+sideLength, XPos+frac, YPos+(sideLength/2), XPos+frac, YPos+(3*sideLength/2), #ffffff));
      triangles.add(new TriangleClass(XPos + (2*frac), YPos+sideLength, XPos+frac, YPos+(sideLength/2), XPos+frac, YPos+(3*sideLength/2), #ffffff));


    }
  }
  TriangleClass currentTriangle;
  for(int i = 0; i < triangles.size(); i++){
      currentTriangle = triangles.get(i);
      currentTriangle.display();

  }



}

void mousePressed() {
/*  for(int XPos=0;XPos<500;XPos=XPos+(2*frac)) {
    for (int YPos=0;YPos<500;YPos=YPos+50) {
      fill(#9AB8B9);
      triangle(XPos, YPos, XPos, YPos+sideLength, XPos+frac, YPos+(sideLength/2));
      triangle(XPos + frac, YPos+(sideLength/2), XPos+(2*frac), YPos, XPos+(2*frac), YPos+sideLength);
      triangle(XPos, YPos+sideLength, XPos+frac, YPos+(sideLength/2), XPos+frac, YPos+(3*sideLength/2));
      triangle(XPos + (2*frac), YPos+sideLength, XPos+frac, YPos+(sideLength/2), XPos+frac, YPos+(3*sideLength/2));
    }
  }*/
  TriangleClass currentTriangle;
  for(int i = 0; i < triangles.size(); i++){
      currentTriangle = triangles.get(i);
      currentTriangle.mouseOver();
      currentTriangle.display();

  }

}
void draw() {

}
class TriangleClass {
  //
  float x1, y1, x2, y2, x3, y3;    // points
  color myColor;                  // fill color
  float mouseSensorX, mouseSensorY;// check point for dist to mouse
  int index;

  TriangleClass(
  float tempX1, float tempY1,
  float tempX2, float tempY2,
  float tempX3, float tempY3,
  color tempmyColor1 ) {
    x1 = tempX1;
    y1 = tempY1;
    x2 = tempX2;
    y2 = tempY2;
    x3 = tempX3;
    y3 = tempY3;
    myColor=tempmyColor1;
    mouseSensorX = (x1+x2+x3 )/ 3;
    mouseSensorY = (y1+y2+y3 )/ 3;
  }  // constructor
  void mouseOver() {
    if (dist ( mouseX, mouseY, mouseSensorX, mouseSensorY ) < 10) {
      /*if (index < 3)
      {
        myColor = colors[index];
        index++;
        }
      else {
        index = 0;
        myColor = #D3D3D3;
      }*/
      myColor = colors[index];
      index++;
      if (index == 4) {
        index = 0;
      }
    } // if
  } // func
  //
  void display() {
    // show rectangle
    fill(myColor);
    stroke(230);
    strokeWeight(1);
    triangle(x1, y1, x2, y2, x3, y3);
  } // func

}