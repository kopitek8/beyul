import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Faq.module.css';
import Accordion from '../../components/Accordion';


const Faq: NextPage = () => {
    const accordionData = [
        {
            key: 0,
            title: '1) How can I get more information about Bigu Life Festival?',
            content: `We produce comprehensive information for each of our treks. Once you’ve decided, please visit the website for a trek itinerary. They contain a detailed day by day route and other information which may help answer any questions you may have. Our What is included / What is not included text also provides a lot of information. You can discuss anything about the nature of the trek with our Beyul team, who can give you practical first hand advice. Please call +977 9808039603 for further information. I use whatsapp as well.
`,
        },
        {
            key: 1,
            title: '2) What makes this trek so interesting?',
            content: `For our first product, we have picked a village called Bigu, it’s a 4 day trek, starting from 3500m, to an unknown road, an ancient salt route connecting Nepal and Tibet. Since then haven’t been walked because of development of alternate roads and airports. So, it will be just you and raw nature, walking on ridges 3500 m drops both sides, walking between mist, over a bed of clouds, into another era, feeling ever more minuscule and alone within the scheme of things, walking in rhododendrons forests and watching natural miracles manifest. Through that adventure, guests will land into a Beyül (hidden valleys enriched in natural splendor, hidden by Buddhist monks in scrolls. away from the eyes of modernism), within it is a village called Bigu, where people would spend 3 days getting in touch with villagers (who are getting in touch with tourists for the first time also), living within an area so magical that has sunlight or one season for 10 months in a year, soil so fertile it grows the best Darjeeling tea at a height of 2200m. A village that used to inhabit 1700 ppl, the youth have left in search for better income abroad surrounded by around 1300 NGOs but totally ignored by them, the government and the awareness of the people living in rest of the country. Our goal is to be a responsible agent, so that tourism thrives with an eye on conservation as it uplifts the economy of the place and giving its people freedom to engage themselves beyond their poverty in paradise. It’s about perceiving tourism as bringing hope into a new area, as we think it would be a very natural and sustainable approach, infusing village elements into a festival atmosphere where tourists bring celebration in the village while enjoying the natural riches and culture of the village and its people.
`,
        },
        {
            key: 2,
            title: '3) What is the activity level on this trip?',
            content: `It requires a moderate level of physical fitness, a desire for experiential learning, and a passion for exploring.
Includes transportation to Bigu and back, staying in resorts, camping, and field explorations.
There might be times where you have limited access to electricity, no mobile network and no Wi-Fi.
You might be eating and interacting with locals.
Such a trek generally involves some steep stretches of ascent and descent. Altitude mostly below 4000m with not usually more than 1000m of ascent or descent in a day. Daily walking typically 5-7 hours.
`,
        },
        {
            key: 3,
            title: '4) How will I cope without my home comforts?',
            content: `Most people soon adapt to the trek routine and to sleeping in a tent. On some trek routes solar showers, bottled drinks and chocolate bars are available at tea houses/lodges along the way but in off-the-beaten-track areas there are no facilities. However, our staff will do everything possible to make things comfortable for you. You’ll be brought a hot drink with your wake-up call and warm water for washing. Our staff, erect and pack away the tents – all you do is pack your own bag and day sack. All your meals are provided during the trek, leaving more time for you to relax and enjoy yourself.
`,
        },
        {
            key: 4,
            title: '5) What sort of people travel with us?',
            content: `Most groups consist of a mix of couples, friends and single travelers in the age range 18 to 50.`,
        },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Frequently Asked Questions</title>
                <meta name='description' content='Frequently asked questions about Beyul' />
                <link rel='icon' href='/favicon.png' />
            </Head>

            <div className={styles.contentContainer}>
                <div>
                    <h1 className={styles.header}>Frequently Asked Questions</h1>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum commodi dolor asperiores voluptatum, quod corrupti impedit, tempora fugiat iure rerum minus illum ratione laborum, explicabo quidem optio magnam! Quod, rerum!</p>
                </div>
                {accordionData.map(({ key, title, content }) => (
                    <Accordion key={key} title={title} content={content} />
                ))}
            </div>
        </div>
    );
};

export default Faq;
