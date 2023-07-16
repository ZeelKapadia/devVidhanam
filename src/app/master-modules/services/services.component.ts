import { Component } from '@angular/core';
import { DataTransferService } from './service/data-transfer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1000,
    // "prevArrow": `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>`,
    // "nextArrow": `<button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>`,
    "prevArrow": false,
    "nextArrow": false,
  };

  cardsENList = [
    {
      title: "Vishnusahstra Paath",
      shloka: "",
      description: "This best stotra quoted from Mahabharata was given as a sermon to Shri Yudhishthirji by Pitamah Bhishma. In which more than 1000 names of Lord Vishnu are mentioned. There is immense power hidden in this hymn. Which is helpful in removing all the problems in Kalyug. This lesson is the best factor for the salvation of ancestors, for attaining salvation and for the fulfillment of other wishes. It is considered best to do this lesson in numbers like 11, 21, 51, 108 etc."
    },
    {
      title: "Bilvarchan",
      shloka: "",
      description: "Bilvapatra is very dear to Shivji. So according to this scripture order, we will offer 108 numbers of Bilvapatra to Lord Shiva in Bilvapatraarchan worship. And according to the Puranas, every wish of the devotee is fulfilled by offering Belpatra on the Shivling. Lakshmi is definitely attained by offering Belpatra. But the fruits of enjoyment, salvation and pilgrimage are also obtained."
    },
    {
      title: "Shree sukta Path",
      shloka: "",
      description: "There is hardly any person in the world who does not wish for happiness and prosperity by the grace of Lakshmi ji. It is the wish of everyone that Maa Lakshmi resides in their house. According to Rigveda, this is the best way out of many ways to please Lakshmi ji. Sri Suktam. The chanting of these mantras and the Yagya Ashta Vidhi makes Lakshmiji attain. And with this, the blessings of Lakshmi ji definitely remain on you."
    },
    {
      title: "Rudraabhishek",
      shloka: "",
      description: `Lord Shankar is also the god of gods. And all the gods also bow their heads at his feet. There is no such desire which is not fulfilled by the consecration of Lord Shiva. In this worship, Lord Shiva is anointed with various substances by chanting the mantras of Yajurveda. for example
With sugarcane juice to get Lakshmi,
      From pilgrimage water to attain salvation
from milk to have children
For the peace of fever with water carrier
For better intelligence, anointing should be done with milk mixed with sugar.`
    },
    // {
    //   title: "grah shanti",
    //   shloka: "",
    //   description: "coming soon"
    // },
  ];
  cardsGUList = [
    // {
    //   title: "જ્યોતિષની આંખ",
    //   shloka: "",
    //   description: "શાસ્ત્રો અનુસાર વેદોને ભગવાનના છ અંગો તરીકે વર્ણવવામાં આવ્યા છે. તેમાંથી જ્યોતિષી દેવની આંખો છે. જ્યોતિષ ગ્રહોની સ્થિતિ અનુસાર થતી પ્રવૃત્તિઓ પરથી બને છે. અને આનાથી ભવિષ્યમાં ઉભી થનારી તમામ સમસ્યાઓનો ઉકેલ આવી શકે છે, એટલા માટે આ શાસ્ત્ર ભગવાનની આંખો છે."
    // },
    // {
    //   title: "કર્મકાંડ",
    //   shloka: "દેવાધિમ જગત સર્વમ્",
    //   description: "આ સમગ્ર સૃષ્ટિ દેવતાઓના નિયંત્રણમાં છે. અને માત્ર તેમના દ્વારા નિયંત્રિત. અને સમયાંતરે દેવતાઓની આરાધના કરીને દેવોને પ્રસન્ન કરવા એ દરેક મનુષ્યનું કર્તવ્ય છે. આ ક્રિયાનું નામ વિધિ છે. મનુષ્યને ગમે તે પ્રવાહીથી તે દેવતાની પૂજા કરવી અને ભક્તિભાવથી તેમની પાસેથી આશીર્વાદ મેળવવું તે કલ્યાણકારી છે."
    // },
    // {
    //   title: "શાસ્ત્ર",
    //   shloka: "",
    //   description: "આપણા ઋષિમુનિઓએ અત્યંત કઠિન તપસ્યા કરીને જીવન જીવવાનો માર્ગ બતાવતા અનેક શાસ્ત્રોની રચના કરી છે અને એ માર્ગ પર ચાલતી વખતે આપણે એ શાસ્ત્રોનું વાંચન કરવું જોઈએ અને તેનું પાલન કરવું જોઈએ. કારણ કે ઘણી વખત શાસ્ત્રોમાં પણ આવી વાતો આવે છે જે આપણા સમાજની બહાર છે. ત્યારે યોગ્ય માર્ગદર્શનથી આપણે તે વસ્તુ સમાજમાં સરળતાથી મેળવી શકીએ છીએ."
    // },
    {
      title: "વિષ્ણુસહસ્ત્ર પાઠ",
      shloka: "",
      description: "મહાભારતમાંથી અવતરિત આ શ્રેષ્ઠ સ્તોત્ર પિતામહ ભીષ્મ દ્વારા શ્રી યુધિષ્ઠિરજીને ઉપદેશ તરીકે આપવામાં આવ્યું હતું. જેમાં ભગવાન વિષ્ણુના 1000 થી વધુ નામોનો ઉલ્લેખ છે. આ સ્તોત્રમાં અપાર શક્તિ છુપાયેલી છે. જે કલયુગમાં તમામ સમસ્યાઓને દૂર કરવામાં મદદરૂપ છે. પિતૃઓના મોક્ષ માટે, મોક્ષ પ્રાપ્તિ માટે અને અન્ય મનોકામનાઓની પૂર્તિ માટે આ પાઠ શ્રેષ્ઠ કારક છે. આ પાઠ 11, 21, 51, 108 વગેરે નંબરોમાં કરવો શ્રેષ્ઠ માનવામાં આવે છે."
    },
    {
      title: "બિલ્વાર્ચન",
      shloka: "",
      description: "શિવજીને બિલ્વપત્ર અતિ પ્રિય છે. તેથી આ શાસ્ત્રના ક્રમ અનુસાર, અમે બિલ્વપત્રર્ચન પૂજામાં ભગવાન શિવને 108 નંબરના બિલ્વપત્ર અર્પણ કરીશું. અને પુરાણો અનુસાર શિવલિંગ પર બેલપત્ર ચઢાવવાથી ભક્તની દરેક મનોકામના પૂર્ણ થાય છે. બેલપત્ર ચઢાવવાથી લક્ષ્મી અવશ્ય પ્રાપ્ત થાય છે. પણ આનંદ, મોક્ષ અને તીર્થયાત્રાનું ફળ પણ મળે છે."
    },
    {
      title: "શ્રી સુક્ત પાઠ",
      shloka: "",
      description: "દુનિયામાં ભાગ્યે જ કોઈ એવો વ્યક્તિ હશે જે લક્ષ્મીજીની કૃપાથી સુખ-સમૃદ્ધિની ઈચ્છા ન કરતો હોય. દરેક વ્યક્તિની ઈચ્છા હોય છે કે તેમના ઘરમાં મા લક્ષ્મીનો વાસ રહે. ઋગ્વેદ અનુસાર, લક્ષ્મીજીને પ્રસન્ન કરવાના અનેક ઉપાયોમાંથી આ શ્રેષ્ઠ ઉપાય છે. શ્રી સુક્તમ. આ મંત્રોના જાપ અને યજ્ઞ અષ્ટ વિધિથી લક્ષ્મીજીની પ્રાપ્તિ થાય છે. અને તેની સાથે લક્ષ્મીજીની કૃપા તમારા પર અવશ્ય બની રહે છે."
    },
    {
      title: "રૂદ્રાભિષેક",
      shloka: "",
      description: `ભગવાન શંકર દેવોના પણ દેવ છે. અને બધા દેવતાઓ પણ તેમના ચરણોમાં માથું નમાવે છે. એવી કોઈ ઈચ્છા નથી જે ભગવાન શિવના અભિષેકથી પૂરી ન થઈ હોય. આ પૂજામાં યજુર્વેદના મંત્રોના જાપ કરીને ભગવાન શિવને વિવિધ દ્રવ્યોથી અભિષેક કરવામાં આવે છે. દાખ્લા તરીકે
લક્ષ્મી મેળવવા શેરડીના રસ સાથે,
      તીર્થ જળથી મોક્ષ મેળવવા માટે
દૂધથી લઈને બાળકો સુધી
પાણીના વાહક સાથે તાવની શાંતિ માટે
સારી બુદ્ધિ માટે સાકર મિશ્રિત દૂધનો અભિષેક કરવો જોઈએ.`
    },
    // {
    //   title: "ગ્રહ શાંતિ",
    //   shloka: "",
    //   description: "ટૂક સમયમાં આવી રહ્યું છે"
    // },
  ];
  cardsHIList = [
    {
      title: "विष्णुसहस्त्र पाठ",
      shloka: "",
      description: "महाभारत से उपदृत यह उत्तमोत्तम स्तोत्र  पितामह भीष्म के द्वारा श्री युधिष्ठिरजी  का उपदेश स्वरुप दिया गया था। जिसमे भगवन विष्णु के १००० से भी ज्यादा नमो का उल्लेख है। इस स्तोत्रमें  अथाह शक्ति छिपी हुई है।  जो कलयुग में सभी परेशानियों  को दूर करने में सहायक है।  पितृओ की सदगति के लिए, मोक्ष प्राप्ति के लिए तथा अन्य कामनाओ की पूर्ति के लिए यह पाठ श्रेष्ठ कारक है। इस पाठ को ११,२१,५१,१०८ आदि संख्यामें करना श्रेष्ठ माना गया है।"
    },
    {
      title: "बिल्वार्चन",
      shloka: "",
      description: "शिवजी को बिल्वपत्र बहोत प्रिय है।  तो इस शास्त्र आज्ञा के अनुसार बिल्वपत्रार्चन पूजन में हम शिवजी पर 108  संख्या में बिल्वपत्र चढाएँगे। और पुराणों के अनुसार शिवलिंग पर बेलपत्र  के अर्पण से भक्त की हर मनोकामना पूर्ण होती है। बेलपत्र के अर्पण से लक्ष्मी प्राप्ति तो होती ही है। परंतु भोग, मोक्ष तथा तीर्थ यात्रा का भी फल प्राप्त होता है।"
    },
    {
      title: " श्री सूक्त पाठ",
      shloka: "",
      description: "संसार में शायद ही ऐसा कोई व्यक्ति हो जो लक्ष्मी जी कृपा से सुख और समृद्धि की कामना ना करता हो। सभी की यह कामना है की माँ लक्ष्मी उनके घरमें निवास करें। ऋग्वेद अनुसार लक्ष्मी जी को प्रसन्न करने हेतु अनेक उपायों में से श्रेष्ठ उपाय है। श्री सूक्तम।  इन मंत्रो का जप तथा यज्ञ अष्ट विधि लक्ष्मीजी को प्राप्त कराता है।  तथा इससे लक्ष्मी जी की कृपा आप पर अवश्य बनी रहती है। "
    },
    {
      title: "रुद्राभिषेक",
      shloka: "",
      description: `भगवन शंकर  तो देवों के भी देव है। और सभी देवता भी उनके चरणों में शीश झुकाते है। ऐसी कोई इच्छा नहीं है जो शिवजी के अभिषेक से पूर्ण न हो। इस पूजा में यजुर्वेद के मंत्रो के द्वारा शिवजी पर विविध द्रव्यों  से अभिषेक किया जाता है।  जैसे की 
लक्ष्मी प्राप्ति के लिए गन्ने के रस से,
      मोक्ष प्राप्ति के लिए तीर्थजल से 
संतान प्राप्ति के लिए दूध से  
ज्वर रोग की शांति के लीए जलधारी से 
श्रेष्ठ बुद्धि के लिए शर्करा मिश्रित दुग्ध से अभिषेक करना चाहिए। `
    },
    // {
    //   title: "ग्रह शांति",
    //   shloka: "",
    //   description: "जल्द आ रहा है"
    // },
  ];

  cardsList = this.cardsENList;

  constructor(private dataTransfer: DataTransferService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  onclick(index: number) {
    this.dataTransfer.sendData.next(index);
  }

  onNaviagte() {
    this.router.navigate(["/web/moreServices"], { relativeTo: this.activatedRoute })
  }

}
