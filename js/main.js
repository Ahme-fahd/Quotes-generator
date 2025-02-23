let myBtn=document.getElementById('myBtn')
let quoteText=document.getElementById('quote-text');
let quoteAuthor=document.getElementById('author');
let lastIndex=-1;

let quotes=[ { text: "الحياة مثل ركوب الدراجة، لتحافظ على توازنك يجب أن تستمر في الحركة.", author: "ألبرت أينشتاين" },
    { text: "التحديات هي ما تجعل الحياة ممتعة، والتغلب عليها هو ما يجعلها ذات معنى.", author: "جوشوا جيه مارين" },
    { text: "الأمل هو القدرة على رؤية الضوء رغم كل الظلام.", author: "ديزموند توتو" },
    { text: "لا تحكم على كل يوم من خلال الحصاد الذي تحصده، ولكن من خلال البذور التي تزرعها.", author: "روبرت لويس ستيفنسون" },
    { text: "إذا كنت تريد تحقيق أشياء عظيمة، توقف عن طلب الإذن.", author: "أميليا إيرهارت" },
    { text: "كل ما تتخيله هو حقيقي.", author: "بابلو بيكاسو" },
    { text: "السعادة ليست شيئًا جاهزًا، إنها تأتي من أفعالك.", author: "الدالاي لاما" },
    { text: "الفشل هو ببساطة فرصة للبدء من جديد، ولكن بذكاء أكبر.", author: "هنري فورد" },
    { text: "إن لم تستطع الطيران، فاركض. إن لم تستطع الركض، فامشِ. إن لم تستطع المشي، فازحف. لكن لا تتوقف عن التقدم.", author: "مارتن لوثر كينغ" },
    { text: "التغيير لن يأتي إذا انتظرنا شخصًا آخر أو وقتًا آخر. نحن من كنا ننتظره، نحن التغيير الذي نسعى إليه.", author: "باراك أوباما" },
    { text: "الشجاعة هي أن تكون نفسك في عالم يحاول جعلك مثل الآخرين.", author: "رالف والدو إمرسون" },
    { text: "العقل العظيم يناقش الأفكار، والعقل العادي يناقش الأحداث، والعقل الصغير يناقش الأشخاص.", author: "إلينور روزفلت" },
    { text: "السر في التقدم هو البدء.", author: "مارك توين" },
    { text: "عندما تغلق بابًا واحدًا، تُفتح لك أبواب أخرى.", author: "ألكسندر جراهام بيل" },
    { text: "أعظم مجد لنا ليس في عدم السقوط، بل في النهوض بعد كل سقوط.", author: "كونفوشيوس" },
    { text: "الحياة ليست بحثًا عن الذات، وإنما هي صنع الذات.", author: "جورج برنارد شو" }
];


function generateQuote(){
let randomIndex;
do{

randomIndex=Math.floor(Math.random()*quotes.length);

}while(lastIndex===randomIndex)
quoteText.innerText=`${quotes[randomIndex].text}`;
quoteAuthor.innerText=`-${quotes[randomIndex].author}`
lastIndex=randomIndex;
};
myBtn.addEventListener('click',generateQuote)

generateQuote();




