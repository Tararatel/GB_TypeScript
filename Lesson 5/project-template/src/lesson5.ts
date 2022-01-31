// Реализовать абстрактный класс MyGraphicsPrimitive2D у которого есть следующие
// свойства: прямоугольная область, описывающая примитив;
// метод - переместить примитив на заданное смещение;.
// От него дожен наследоваться абстрактный класс MyAreaPrimitive2D,
// у которого есть свойство площадь. От него должны наследоваться класс MyCircle,
// у него есть свойства: центр окружности и ее радиус, а также должен наследоваться
// класс MyRectangle с свойствами: ширина и высота, левая верхняя граница, правая нижняя граница

abstract class MyGraphicsPrimitive2D {
  protected rectangularArea: number[] = [];

  protected abstract movePrimitive(offsetX: number, offsetY: number): void;
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  protected square: number = 0;
}

class MyCircle extends MyAreaPrimitive2D {
  protected movePrimitive(offsetX: number, offsetY: number): void {
    console.log(offsetX, offsetY);
  }
  protected circleCernter: number = 0;
  protected radius: number = 0;
}

class MyRectangle extends MyAreaPrimitive2D {
  protected movePrimitive(offsetX: number, offsetY: number): void {
    console.log(offsetX, offsetY);
  }
  protected width: number = 0;
  protected height: number = 0;
  protected leftTop: number = 0;
  protected rightBottom: number = 0;
}

// Второй вариант наследования на примере класса MyRectangle

// class MyRectangle extends MyAreaPrimitive2D {
//   constructor(
//     public width: number,
//     public height: number,
//     public leftTop: number,
//     public rightBottom: number
//   ) {
//     super();
//   }
//   protected movePrimitive(offsetX: number, offsetY: number): void {}
// }
