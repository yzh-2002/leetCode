function isValid(s: string): boolean {
    if (s.length%2) return false;
    let stack:Array<string> =[];
    let sList:Array<string> =s.split('')
    if (sList[0]==')'||sList[0]==']'||sList[0]=='}') return false;
    const match_brackets ={'(':")",'[':"]",'{':"}"}
    for(let index=0;index<sList.length;index++){
        let brackets =sList[index];
        if (brackets==')'||brackets==']'||brackets=='}'){
            if (match_brackets[stack.pop() as string]!=brackets) return false;
        }else {
            stack.push(brackets);
        }
    }
    return !stack.length ? true : false;
};