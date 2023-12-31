---
layout: post
title:  Վիրուսի տարածումը Հայաստանում [or] R 0-ն կախված ա մեզանից
date:   2020-03-26 04:18:00 -0400
categories: Thoughts Science
excerpt_separator: "<!--more-->"
tags:
  - code
  - science
---

Disclaimer. ես բացարձակապես ոչ մի կվալիֆիկացիա չունեմ էս ոլորտում, ու իմ ստեղի գրածը պետք ա ընկալել ուղղակի որպես "մաթեմատիկորեն հիմնավորված խառը մտքեր", այլ ոչ ակադեմիական հոդված, կամ կանխատեսում:

Արդեն շատերն են գրել/խոսացել/կարդացել նոր վիրուսի տարածման մաթեմատիկական մոդելների մասին (օրինակ, [SEIR մոդելից](https://gabgoh.github.io/COVID/index.html) ու իր տարբեր վարիացիաների): Դետալների վրա չեմ ֆիքսվի, միայն կասեմ, որ էս մոդելը շատ պարզ (single zone) կերպով կանխատեսում ա հիվանդության տարածման դինամիկան, տրված որոշակի պարամետրեր: Էդ պարամետրերն են.

1. $$R_0$$ = վիրուսի տարածելինության պոտենցիալը, թե միջինում քանի հոգի է վարակում արդեն վարակված մարդը (սա կախված է թե բուն վիրուսից, թե մարդկանց մոբիլությունից ու կոնտակտների քանակից);
2. $$T_{\rm inf}$$ = քանի օր վարակված անձը դեռ կարող է փոխանցել վիրուսը;
3. $$T_{\rm inc}$$ = ինկուբացիոն շրջան, թե վարակումից քանի օր հետո եմ ի հայտ գալիս սիմպտոմները:

Էս փոստում, օգտագործելով էս պարզ մոդելը (որը չափազանց շատ պարզացումներ է պարունակում, ուստի պետք է ընկալվի ընդհամենը որպես "մոդել") ու համեմատելով արդեն իսկ բացահայտված հիվանդների քանակի հետ ես կփորձեմ հասկանալ, թե (ա) ինչքան մեծ է վիրուսի տարածելիությունը $$R_0$$ Հայաստանում (մինչև կառանտին);
(բ) էպիդեմիայի ո՞ր շրջանում է ներկայիս դրությամբ գտնվում Հայաստանը;
(գ) ինչ կանխատեսումներ կարելի է անել Հայաստանի բժշկության վրա ճնշման ծավալների մասին:

<!--more-->

### Ե՞րբ է վիրուսը մտել Հայաստան ու ինչ տեմպերով է տարածվել

Առաջին երկու հարցերին պատասխանելու համար, կառուցենք վարակվածների թիվը ժամանակի հետ, ու համեմատենք [իրական բացահայտվածների քանակի](https://www.wikiwand.com/en/2020_coronavirus_pandemic_in_Armenia) հետ: Պարզության համար վերցնենք հետևյալ արժեքները $$T_{\rm inf} = 2.9$$, $$T_{\rm inc} = 5.2$$ ([աղբյուր](https://cmmid.github.io/topics/covid19/current-patterns-transmission/wuhan-early-dynamics.html)), ենթադրենք, որ վիրուսը Հայաստանում առաջին անգամ հայտնվել է հենց մարտի 1ին:

<img src="/assets/images/2020-covid19-armenia/pic1.png" width="60%">

Կառուցելով երեք տարբեր $$R_0$$ արժեքների համար, տեսնում ենք, որ վարակվածների թիվը մոդելում թերագնահատված է: Նույնիսկ բավականին բարձր $$R_0$$ արժեքների համար (համաշխարհային տվյալներից ելնելով, $$R_0$$-ի արժեքը տատանվում է $$2$$-ից մինչև $$3$$-ը): Ըստ երևույթի, բացառելով էն փաստը որ որևէ պատճառով Հայաստանում վիրուսի տարածելիության գործակիցը անոմալ բարձր է, վիրուսը Հայաստանում հայտվնել է ավելի շուտ: Բայց ինչքա՞ն շուտ: Դրա համար կարող ենք կառուցել բազմաթիվ մոդելներ փոփոխելով $$R_0$$-ն ու նախնական վարակման օրը: Համեմատելով այդ մոդելները իրական տվյալների հետ, կարող ենք մոտավոր հասկանալ, թե ինչքան ժամանակ է վիրուսը արդեն գտնվում Հայաստանում ու ինչքան արագ է տարածվում: Իրական տվյալների հետ համեմատելու համար ես վերցնում եմ միայն այն կետերը, որտեղ վարակվածների թիվը գերազանցում է 50-ը, ենթադրելով, որ այդ պահից սկսած մոտավորապես վարակվածների մեծամասնությունը բացահայտված ու գրանցված է:

> Հա, գիտեմ որ էս ներքևի նկարը ստատիստիկա իմացող մարդկանց մոտ ֆեյսպալմներ կհրահրի: Բայց դե, ք'մոն, մենք ստեղ ամեն ինչ մոտավոր ենք անում:

<img src="/assets/images/2020-covid19-armenia/pic2.png" width="60%">

Դեղին շրջանները\` ամենահավանականն են: Եթե ենթադրենք, որ Հայաստանում $$R_0$$ արժեքը տատանվում է $$2.5$$-ից\` $$3$$-ը, ըստ երևույթի վիրուսը Հայաստան է մտել դեռ **փետրվարի կեսերին**: Հաշվի առնելով, որ Իրանի հետ [սահմանը փակվել է](https://www.azatutyun.am/a/30453647.html) փետրվարի 25-ին, բավականին հեշտ ա սպեկուլացիա անել ու պատկերացնել, որ իրոք առաջին վարակվածը արդեն փետրվարի կեսերին Հայաստան է եկել: Սա իրականում անհավանական չէ: Օրինակ, չնայած նրան որ Իտալիայում առաջին դեպքերը սկսել են գրանցվել Փետրվարի 20-ի կողմերը, ըստ որոշ [աղբյուրների](https://www.reuters.com/article/us-health-coronavirus-italy-scientists/coronavirus-may-have-reached-italy-from-germany-scientists-say-idUSKBN20Y35B) առաջին վարակվածը հայտնվել է Իտալիայում դեռ Հունվարի 25-26-ին:

> Նշեմ հետևյալը, ինչքան ավելի ուշ ենք ենթադրում, վիրուսի\` Հայաստան մտնելու օրը, էնքան ավելի մեծ տարածելիության արժեք է հարկավոր, $$R_0$$, բացայտվածների թիվը բացատրելու համար: Այս ամեն ինչը կախված է նաև ինկուբացիոն և ինֆեկցիոն շրջաններից, բայց կախվածությունը բավականին թույլ է, ու այդ թվերը հիմնականում համաձայնեցված են բավական փոքր սահմանների մեջ տարբեր աղբյուրներում:

Ըստ այս, կրկնեմ, եթե վիրուսը մտել է Հայաստան, օրինակ, **փետրվարի 20-ին**, ապա նրա տարածելիության գործակիցը այս ընթացքում ըստ երևույթի եղել է բավականին բարձր\` $$2.8$$:

### Ի՞նչ կանխատեսումներ կարելի է անել

Փետրվարի 16-ից Հայաստանում ակտիվ սահմանափակումներ են մտցվում, ու ամենայն հավանականությամբ $$R_0$$ գործակիցը զգալիորեն կնվազի: Ամենամեծ խնդիրը, իմ կարծիքով, այն է, կհերիքի արդյո՞ք Հայաստանում բժշկության ռեսուրսների ծավալը:

Առաջին հերթին տեսնենք ամենապեսիմիստիկ տարբերակը (որը, հիմիկվա դրությամբ, կարծում եմ, գրեթե անհավանական է), երբ վիրուսի տարածելիության գործակիցը չի նվազում: Այդ դեպքում վիրուսը վարակում է բնակչության (3 մլն-ից) մոտավորապես 90%-ը մինչը հուլիսի կեսերը (որից մի մասը բուժվում է, մյուս մասը, ցավոք, մահանում): Այդ դեպքում մոտավորապես մայիսի կեսերին Հայաստանում լինում է վարակվածների բում, երբ բնակչության 10%-ը (300,000 մարդ) վարակված է, ու վարակվածների զգալի մասին հարկավոր է լինում հոսպիտալիզացիա իսկ որոշ մասին [(5-10%-ին)](https://www.cdc.gov/mmwr/volumes/69/wr/mm6912e2.htm) ինտենսիվ բուժում ու ամենայն հավանականությամբ թոքերի արհեստական շնչառություն: Ավելորդ է ասել, որ դա կատաստրոֆիկ ճնշում է բժշկության վրա, բայց, կրկնեմ նորից, այս սցենարը հիմա շատ անհավանական է:

<img src="/assets/images/2020-covid19-armenia/pic4.png" width="60%">

Հիմա փորձենք պատկերացնել, թե ինչ կլինի, եթե մենք փոխենք վիրուսի տարածման գործակիցը, $$R_0$$-ն, ասենք մարտի 25-ից հետո: Նախ տեսնենք թե ոնց կարելի ա փոխել պիկային վարակվածների թիվը (ներքևի նկարը): Կոպիտ ասած, եթե ամեն վարակված վարակի միջինում 1.5 մարդ, ըստ էս պարզ մոդելի ամենաշատ վարակվածները կլինեն սեպտեմբերի շրջաններում, ու կկազմեն ընդհամենը 2%. 5 անգամ ավելի քիչ քան պեսիմիստիկ պայմաններում: Սա կազմում է մոտ 60,000 մարդ, որից, կարծում եմ, շատ փոքր տոկոսին հարկավոր կլինի ինտենսիվ բուժում, քանի որ 60+ հասակում Հայաստանի բնակչությունից ըդնհամենը 15%-ն է (համեմատության համար ԱՄՆ-ում\` 18%, Իտալիայում\` 25-30%): Ամենայն հավանականությամբ, կարծում եմ, որ կառանտինի ժամանակ իրական $$R_0$$-ն նույնիսկ էլ ավելի փոքր կլինի (Իտալիայի Լոմբարդիայում, օրինակ, աճը արդեն սկսել է դանդաղել, հասնելով 30,000-ի, ինճը բնակչության մոտ 0.3%-ն է):

> Փոքր $$R_0$$ արժեքների դեպքում, երբ վարակվածների թվի աճը գրեթե գծային ա, մոդելը, կարծում եմ, արդեն նորմալ չի աշխատում, քանի որ այդ դեպքում ակտիվ կառանտը ու ինքնամեկուսացումը կարող են բերել վարակվածների թիվը զրոյին մոտ:

<img src="/assets/images/2020-covid19-armenia/pic5.png" width="60%">

Մյուս կողմից, եթե նայենք, թե բնակչության որ տոկոսն ա ի վերջո վարակվում էս հիվանդությամբ, պատկերը բավականին վտանգավոր ա: Տարածելիության թիվը նույնիսկ երկու անգամ իջեցնելու դեպքում, միևնույն է բնակչության զգալի մասը ի վերջո վարակվում է (նայիր ներքևի նկարը): Ըստ երևույթի, եթե Հայաստանում վիրուսի տարածման տեմպերը չընկնեն $$1$$-ին մոտ, ինչ-որ պահից սկսած Հայաստանում էլ ստիպված կլինեն Իտալիայի կամ Չինաստանի օրինակով խիստ (կիսառազմական) կառանտին մտցնել:

<img src="/assets/images/2020-covid19-armenia/pic6.png" width="60%">

Եկեք մի քիչ զում-ին անենք, ու տեսնենք թե ինչ կարելի է սպասել մոտակա երկու ամսվա ընթացքում: Իմ կարծիքով, երբ վարակվածների թիվը հասնի 1000-ի, արդեն ավելի խիստ միջոցներ կձեռնարկվեն մարդկանց մեկուսացման համար, ու, ի վերջո, ընդհանուր գումարային վարակվածների թիվը չի անցնի 10,000-ից (մայիսի սկզբերին):

<img src="/assets/images/2020-covid19-armenia/pic7.png" width="60%">

Բոլոր գրաֆիկները կարող եք ինքներդ կառուցել, կամ խաղալ էս մաթեամատիկական մոդելի հետ [էս jupyter notebook-ի միջոցով](/assets/files/2020-covid19-armenia/stayhealthy.ipynb): Առողջ մնացեք:
