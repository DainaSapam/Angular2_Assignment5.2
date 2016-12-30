function MyClassDecorator(
    target: Function 
    ) {
    console.log("ClassDecorator called on: ", target);
}

@MyClassDecorator
class MyClassDecoratorExercise {
}

function MyClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@MyClassDecoratorParams(1, "a")
@MyClassDecoratorParams(2, "b")
class MyClassDecoratorParamsExercise {
}