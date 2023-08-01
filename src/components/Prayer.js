import React from "react"
import prayersData from "../prayersData.js"
import "../style.css"

export default function Prayers() {
    
    const [prayer, setPrayer] = React.useState({
        prayernamePrayer: "صلاة الفجر",
        invocationafteradhanPrayer: "اللهم ربَّ هذه الدعوةِ التامة، والصلاة القائمة، آتِ محمدًا الوسيلةَ والفضيلة، وابعَثْه مقامًا محمودًا الذي وعَدْتَه.",
        sunnahprayerbeforefardPrayer: "ركعتان سنة",
        shahadaonePrayer: "أشهد أن لا إله إلا الله وحده لا شريك له وأن محمداً عبده ورسوله. (٣ مرات)",
        istighfaronePrayer: "أستغفر الله العظيم وأتوب إليه. (١٠٠ مرة)",
        alkhlassonePrayer: "سورة الإخلاص (٣ مرات)",
        subhanakarabbializzaPrayer: "سبحان ربك رب العزة عما يصفون . وسلام على المرسلين . والحمد لله رب العالمين.",
        ikamatPrayer: "إقامة الصلاة : الله أكبرُ الله أكبرُ الله أكبرُ الله أكبرُ أشهد أن لا إله إلا اللهُ أشهد أن لا إله إلا اللهُ أشهد أن محمدًا رسولُ اللهِ أشهد أن محمدًا رسولُ اللهِ حيّ على الصلاة حي على الصلاة حيَّ على الفلاح حي على الفلاح قد قامتِ الصلاة قد قامتِ الصلاةُ الله أكبرُ الله أكبرُ لا إله إلا اللهُ.",
        salatulfardPrayer: "ركعتان فرض",
        shahadatwoPrayer: "لا إله إلا الله محمد رسول الله. (٣ مرات)",
        istighfartwoPrayer: "أستغفر الله. (٣ مرات)",
        salatualamuhammadonePrayer: "اللهم صل على سيدنا محمد وعلى آل سيدنا محمد.",
        ilahukumwahidPrayer: "أعوذ بالله من الشيطان الرجيم. وإلهكم إلهٌ واحدٌ لا إلهَ إلا هو الرحمن الرحيم.", 
        ayatulkursiPrayer: "ٱية الكرسي",
        subhanallahPrayer: "سبحان الله. (٣٣ مرة)",
        alhamdulillahPrayer: "الحمد لله. (٣٣ مرة)",
        allahuakbarPrayer: "الله أكبر. (٣٣ مرة)",
        sunnahprayerafterfardPrayer: " ",
        shahadathreePrayer: " ", 
        istighfarthreePrayer: " ",
        alfatihaPrayer: " ",
        quranPrayer: "سورة يس",
        alikhlasPrayer: "سورة الإخلاص (٣ مرات)",
        alfalaqPrayer: "سورة الفلق (مرة)",
        annasPrayer: "سورة الناس (مرة)", 
        salatualamuhammadtwoPrayer: "لا إله إلا الله محمد رسول الله. (١٠ مرات)",
        allahumasalialamuhammadPrayer: "اللهم صل على محمد وعلى آل محمد وسلم. (١٠ مرات)"
    })
    const [allPrayerImages, setAllPrayerImages] = React.useState(prayersData)
    const [count, setCount] = React.useState(1)
    
    function getPrayerImage() {
        setCount(function(oldValue) {
            if (oldValue < 4) {
                return oldValue + 1;
            } else {
                return 0;
            }
        })
        const prayersArray = allPrayerImages.data.prayers
        const prayerName = prayersArray[count].prayer_name
        const invocationAfterAdhan = prayersArray[count].invocation_after_adhan
        const sunnahPrayerBeforeFard = prayersArray[count].sunnah_prayer_before_fard
        const shahadaOne = prayersArray[count].shahada_one
        const istighfarOne = prayersArray[count].istighfar_one
        const alkhlassOne = prayersArray[count].al_khlass_one
        const subhanakaRabbiAlizza = prayersArray[count].subhanaka_rabbi_al_izza
        const ikamat = prayersArray[count].ikamat
        const salatulFard = prayersArray[count].salatul_fard
        const shahadaTwo = prayersArray[count].shahada_two
        const istighfarTwo = prayersArray[count].istighfar_two
        const salatuAlaMuhammadOne = prayersArray[count].salatu_ala_muhammad_one
        const ilahukumWahid = prayersArray[count].ilahukum_wahid
        const ayatulKursi = prayersArray[count].ayatul_kursi
        const subhanAllah = prayersArray[count].subhanallah
        const alhamdulillah = prayersArray[count].alhamdulillah
        const allahuAkbar = prayersArray[count].allahu_akbar
        const sunnahPrayerAfterFard = prayersArray[count].sunnah_prayer_after_fard
        const shahadaThree = prayersArray[count].shahada_three
        const istighfarThree = prayersArray[count].istighfar_three
        const alfatiha = prayersArray[count].al_fatiha
        const quran = prayersArray[count].quran
        const alIkhlas = prayersArray[count].al_ikhlas
        const alFalaq = prayersArray[count].al_falaq
        const annas = prayersArray[count].annas
        const salatuAlaMuhammadTwo = prayersArray[count].salatu_ala_muhammad_two
        const allahumaSaliAlaMuhammad = prayersArray[count].allahuma_sali_ala_muhammad
        setPrayer(prevPrayer => ({
            ...prevPrayer,
            prayernamePrayer: prayerName,
            invocationafteradhanPrayer: invocationAfterAdhan,
            sunnahprayerbeforefardPrayer: sunnahPrayerBeforeFard,
            shahadaonePrayer: shahadaOne,
            istighfaronePrayer: istighfarOne,
            alkhlassonePrayer: alkhlassOne,
            subhanakarabbializzaPrayer: subhanakaRabbiAlizza,
            ikamatPrayer: ikamat,
            salatulfardPrayer: salatulFard,
            shahadatwoPrayer: shahadaTwo,
            istighfartwoPrayer: istighfarTwo,
            salatualamuhammadonePrayer: salatuAlaMuhammadOne,
            ilahukumwahidPrayer: ilahukumWahid, 
            ayatulkursiPrayer: ayatulKursi,
            subhanallahPrayer: subhanAllah,
            alhamdulillahPrayer: alhamdulillah,
            allahuakbarPrayer: allahuAkbar,
            sunnahprayerafterfardPrayer: sunnahPrayerAfterFard,
            shahadathreePrayer: shahadaThree, 
            istighfarthreePrayer: istighfarThree,
            alfatihaPrayer: alfatiha,
            quranPrayer: quran,
            alikhlasPrayer: alIkhlas,
            alfalaqPrayer: alFalaq,
            annasPrayer: annas, 
            salatualamuhammadtwoPrayer: salatuAlaMuhammadTwo,
            allahumasalialamuhammadPrayer: allahumaSaliAlaMuhammad
        }))
        
    }
    
    return (
        <main>
            <div className="form">
                <button 
                    className="form--button"
                    onClick={getPrayerImage}
                >
                    الصلاة التالية
                </button>
            </div>
            <div dir="rtl">
            <p className="text-arabic"><strong>{prayer.prayernamePrayer}</strong></p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.invocationafteradhanPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.sunnahprayerbeforefardPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.shahadaonePrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.istighfaronePrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.alkhlassonePrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.subhanakarabbializzaPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.ikamatPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.salatulfardPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.shahadatwoPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.istighfartwoPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.salatualamuhammadonePrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.ilahukumwahidPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.ayatulkursiPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.subhanallahPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.alhamdulillahPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.allahuakbarPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.sunnahprayerafterfardPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.shahadathreePrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.istighfarthreePrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.alfatihaPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.quranPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.alikhlasPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.alfalaqPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.annasPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.salatualamuhammadtwoPrayer}</p>
            </div>
            <div dir="rtl">
            <p className="text-arabic">{prayer.allahumasalialamuhammadPrayer}</p>
            </div>
        </main>
    )
}