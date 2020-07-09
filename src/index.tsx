//ok:
let x: number[] = [1,2,3];
x.map<boolean>(x => x > 1);

//error (generic parameter not removed):
let y: number[] = [1,2,3];
y?.map<boolean>(x => x > 1);