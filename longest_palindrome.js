const s = 'I like racecars';

function longestPalindrome(s){
    let result = 0;

    if (s.length === 0 || s.length === 1){
        return s.length;
    }

    function Palindrome(pal){
        const pali = pal
            .split('')
            .reverse()
            .join('');

        return pali === pal;
    }

    const si = s.includes(' ') ? s.split(' ') : [s];

    for (const word of si) {
        for (let i = 0; i < word.length; i++) {
            for (let j = i + 1; j <= word.length; j++) {
                const sub = word.slice(i, j);

                if (Palindrome(sub) && sub.length > result) {
                    result = sub.length;
                }
            }
        }
    }

    return result;
}

console.log(longestPalindrome(s)); // 7