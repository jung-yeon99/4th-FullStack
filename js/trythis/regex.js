const regex = /^[A-z0-9][\w-\.]*@[\w-]+\..*([A-z]{2,7})$/;

const isVaildEmailAddress = (str) => {
    const isVaild = regex.test(str);
    console.log(str, isVaild);
}

regex.test('jade123@topician.com'); // true
regex.test('jade123@topician.store'); // true
regex.test('jade123@topician'); // false
regex.test('ja_de.j-u-n@topician.store'); // true
regex.test('jade@jeon@topician.store'); // false