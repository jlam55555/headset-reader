let text = `Sect. 59. This holds in all the laws a man is under, whether natural or civil. Is a man under the law of nature? What made him free of that law? what gave him a free disposing of his property, according to his own will, within the compass of that law? I answer, a state of maturity wherein he might be supposed capable to know that law, that so he might keep his actions within the bounds of it. When he has acquired that state, he is presumed to know how far that law is to be his guide, and how far he may make use of his freedom, and so comes to have it; till then, some body else must guide him, who is presumed to know how far the law allows a liberty. If such a state of reason, such an age of discretion made him free, the same shall make his son free too. Is a man under the law of England? What made him free of that law? that is, to have the liberty to dispose of his actions and possessions according to his own will, within the permission of that law? A capacity of knowing that law; which is supposed by that law, at the age of one and twenty years, and in some cases sooner. If this made the father free, it shall make the son free too. Till then we see the law allows the son to have no will, but he is to be guided by the will of his father or guardian, who is to understand for him. And if the father die, and fail to substitute a deputy in his trust; if he hath not provided a tutor, to govern his son, during his minority, during his want of understanding, the law takes care to do it; some other must govern him, and be a will to him, till he hath attained to a state of freedom, and his understanding be fit to take the government of his will. But after that, the father and son are equally free as much as tutor and pupil after nonage; equally subjects of the same law together, without any dominion left in the father over the life, liberty, or estate of his son, whether they be only in the state and under the law of nature, or under the positive laws of an established government.`;

let words = text.split(' ');
let wordCount = words.length;
let i = 0;
let wordInterval = 2000;
let wordsPerInterval = 10;
let elem = document.querySelector('#text');
let t = setInterval(_ => {

  elem.textContent = words.slice(i, i + wordsPerInterval).join(' ');
  
  i += wordsPerInterval;
  if(i >= wordCount) {
    clearInterval(t);
  }

}, wordInterval);
