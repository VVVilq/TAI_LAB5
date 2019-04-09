class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number){
        this.re = re;
        this.im = im;
    }

    add(complex: Complex) {
        return new Complex(this.re + complex.re, this.im + complex.im);
    }

    sub(complex: Complex) {
        return new Complex(this.re - complex.re, this.im - complex.im);
    }

    abs() {
        return Math.sqrt(Math.pow(this.re, 2) + (Math.pow(this.im, 2)));
    }

    toString(){
        return this.re.toString() + "+" +  this.im.toString()+"i";
    }
}

let complex1 = new Complex(3, 4);
let complex2 = new Complex(2, 3);

let complexResult1 = complex1.add(complex2);
console.log(complexResult1.toString());
let complexResult2 = complexResult1.sub(complex1);
console.log(complexResult2.toString());
let complexResult3 = complexResult2.abs();
console.log(complexResult3);