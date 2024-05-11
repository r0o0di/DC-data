//  MST = Movie Soundtrack
// OST = Original Soundtrack
const soundtracks = [
    {
        Detective_Conan_Original_Soundtrack_1: [
            ["1", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "2:33"],
            ["2", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "4:12"],
            ["3", "コナンのRock&Roll", "Konan no Rock & Roll", "Conan's Rock & Roll", "3:32"],
            ["4", "コナンの夢", "Konan no Yume", "Conan's Dream", "3:30"],
            ["5", "毛利小五郎のテーマ", "Mōri Kogorō no Tēma", "Kogoro Mouri's Theme", "1:56"],
            ["6", "コナンのテーマ", "Konan no Tēma", "Conan's Theme", "2:52"],
            ["7", "蘭・愛のテーマ", "Ran・Ai no Tēma", "Ran's Love Theme", "3:05"],
            ["8", "のんびり気分", "Nonbiri Kibun", "Carefree Feeling", "2:56"],
            ["9", "阿笠博士のテーマ", "Agasa Hakase no Tēma", "Professor Agasa's Theme", "2:10"],
            ["10", "それいけコナン （哀愁ヴァージョン）", "Soreike Konan (Aishū Vājon)", "Let's Go Conan (Sorrow Version)", "2:48"],
            ["11", "対決のテーマ", "Taiketsu no Tēma", "Showdown Theme", "2:59"],
            ["12", "はずむ蘭", "Hazumu Ran", "Bouncing Ran", "2:18"],
            ["13", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "2:01"],
            ["14", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "2:06"],
            ["15", "小さな巨人", "Chiisana Kyojin", "A Small Giant", "1:19"],
            ["16", "コナンのテーマ （バラード・ヴァージョン)", "Konan no Tēma (Barādo・Vājon)", "Conan's Theme (Ballad Version)", "1:42"],
            ["17", "コナンの勝利", "Konan no Shōri", "Conan's Victory", "2:09"],
            ["18", "事件解決", "Jiken Kaiketsu", "Case Resolution", "2:58"],
            ["19", "前話回想", "Zenwa Kaisō", "Previous Story Recollection", "0:34"],
            ["20", "名探偵コナン・メインテーマ （ヴォーカル・ヴァージョン)", "Meitantei Konan・Mein Tēma (Vōkaru・Vājon)", "Detective Conan Main Theme (Vocal Version)", "1:54"]
        ]
    },
    {
        Detective_Conan_Original_Soundtrack_2: [
            ["1", "「名探偵コナン」 メイン·テーマ (予告)", "'Meitantei Konan' Mein・Tēma (Yokoku)", "'Detective Conan' Main Theme (Preview)", "0:32"],
            ["2", "それいけコナン (ミディアムテンポバージョン)", "Soreike Konan (Midiamu・Tenpo Bājon)", "Let's Go Conan (Medium Tempo Version)", "2:52"],
            ["3", "それいけコナン (超早バージョン)", "Soreike Konan (Chōhaya Bājon)", "Let's Go Conan (Very Fast Version)", "2:36"],
            ["4", "蘭のテーマ (優しさバージョン)", "Ran no Tēma (Yasashisa Bājon)", "Ran's Theme (Gentle Version)", "4:19"],
            ["5", "蘭のテーマ (涙バージョン)", "Ran no Tēma (Namida Bājon)", "Ran's Theme (Tearful Version)", "2:48"],
            ["6", "コナンの夢 (夕暮れバージョン)", "Konan no Yume (Yūgure Bājon)", "Conan's Dream (Twilight Version)", "2:36"],
            ["7", "コナンのRock & Roll (アナザーバージョン)", "Konan no Rock & Roll (Anazā Bājon)", "Conan's Rock & Roll (Another Version)", "3:13"],
            ["8", "犯人のアジト (忍び込みバージョン)", "Hannin no Ajito (Shinobikomi Bājon)", "The Culprit's Hideout (Creeping In Version)", "2:29"],
            ["9", "犯人のアジト (いよいよバージョン)", "Hannin no Ajito (Iyoiyo Bājon)", "The Culprit's Hideout (More and More Version)", "1:45"],
            ["10", "蘭·愛のテーマ (Guitar バージョン)", "Ran・Ai no Tēma (Gitā Bājon)", "Ran's Love Theme (Guitar Version)", "2:03"],
            ["11", "対決のテーマ (落ち着きバージョン)", "Taiketsu no Tēma (Ochitsuki Bājon)", "Showdown Theme (Calm Version)", "3:19"],
            ["12", "事件解決 (意気揚々バージョン)", "Jiken Kaiketsu (Ikiyōyō Bājon)", "Case Resolution (Triumphant Version)", "2:24"],
            ["13", "沈む夕陽 (哀愁バージョン)", "Shizumu Yūhi (Aishū Bājon)", "Depressing Sunset (Sorrow Version)", "2:03"],
            ["14", "沈む夕陽 (Acoustic バージョン)", "Shizumu Yūhi (Akōsutikku Bājon)", "Depressing Sunset (Acoustic Version)", "1:11"],
            ["15", "コナンの勝利 (夜空バージョン)", "Konan no Shōri (Yozora Bājon)", "Conan's Victory (Night Sky Version)", "1:35"],
            ["16", "毛利小五郎のテーマ (Funky バージョン)", "Mōri Kogorō no Tēma (Fankii Bājon)", "Kogoro Mouri's Theme (Funky Version)", "1:45"],
            ["17", "事件現場 (オリジナルバージョン)", "Jiken Genba (Orijinaru Bājon)", "Scene of the Case (Original Version)", "1:55"],
            ["18", "事件現場 (ショートバージョン)", "Jiken Genba (Shōto Bājon)", "Scene of the Case (Short Version)", "1:05"],
            ["19", "事件解明 (オリジナルバージョン)", "Jiken Kaimei (Orijinaru Bājon)", "Case Clarification (Original Version)", "2:08"],
            ["20", "事件解明 (Slow バージョン)", "Jiken Kaimei (Surō Bājon)", "Case Clarification (Slow Version)", "1:17"],
            ["21", "悪のテーマ (パート１)", "Aku no Tēma (Pāto 1)", "Theme of Evil (Part 1)", "0:54"],
            ["22", "悪のテーマ (パート２)", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "0:58"],
            ["23", "悪のテーマ (パート３)", "Aku no Tēma (Pāto 3)", "Theme of Evil (Part 3)", "1:00"],
            ["24", "脅迫 (パート１)", "Kyōhaku (Pāto 1)", "Threat (Part 1)", "1:13"],
            ["25", "脅迫 (パート２)", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "1:00"],
            ["26", "事件現場 (謎バージョン)", "Jiken Genba (Nazo Bājon)", "Scene of the Case (Mystery Version)", "1:26"],
            ["27", "推理 (オリジナルバージョン)", "Suiri (Orijinaru Bājon)", "Deduction (Original Version)", "1:07"],
            ["28", "推理 (不気味バージョン)", "Suiri (Bukimi Bājon)", "Deduction (Ominous Version)", "1:08"],
            ["29", "緊迫", "Kinpaku", "Tension", "1:49"],
            ["30", "絶体絶命", "Zettai Zetsumei", "A Desperate Situation", "0:57"],
            ["31", "のんびり気分 (アナザーバージョン)", "Nonbiri Kibun (Anazā Bājon)", "Carefree Feeling (Another Version)", "1:48"],
            ["32", "犯人現わる！", "Hannin Arawaru!", "The Culprit is Revealed!", "0:18"],
            ["33", "事件発生！", "Jiken Hassei!", "A Case Springs Forth!", "0:21"],
            ["34", "コナンのテーマ （予告）", "Konan no Tēma (Yokoku)", "Conan's Theme (Preview)", "0:32"],
            ["35", "「名探偵コナン」 メイン·テーマ (バラードバージョン)", "'Meitantei Konan' Mein・Tēma (Barādo Bājon)", "'Detective Conan' Main Theme (Ballad Version)", "1:36"],
            ["36", "「名探偵コナン」メイン・テーマ", "'Meitantei Konan' Mein・Tēma", "'Detective Conan' Main Theme", "2:33"],
            ["37", "コナンの夢", "Konan no Yume", "Conan's Dream", "3:56"],
            ["38", "対決のテーマ", "Taiketsu no Tēma", "Showdown Theme", "2:51"],
            ["39", "犯人のアジト１", "Hannin no Ajito 1", "The Culprit's Hideout 1", "2:28"],
            ["40", "悪のテーマ１", "Aku no Tēma 1", "Theme of Evil 1", "0:55"],
            ["41", "絶体絶命", "Zettai Zetsumei", "A Desperate Situation", "1:05"],
            ["42", "それいけコナン１", "Soreike Konan 1", "Let's Go Conan 1", "2:55"],
            ["43", "事件解決", "Jiken Kaiketsu", "Case Resolution", "2:58"],
            ["44", "のんびり気分１", "Nonbiri Kibun 1", "Carefree Feeling 1", "1:57"],
            ["45", "蘭・愛のテーマ", "Ran・Ai no Tēma", "Ran's Love Theme", "3:03"],
            ["46", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "1:36"],
            ["47", "小さな巨人", "Chiisa na Kyojin", "A Small Great Person", "1:17"],
            ["48", "コナンのテーマ１", "Konan no Tēma 1", "Conan's Theme 1", "2:51"],
            ["49", "事件現場１", "Jiken Genba 1", "Scene of the Case 1", "1:25"],
            ["50", "緊迫１", "Kinpaku 1", "Tension 1", "1:58"],
            ["51", "犯人のアジト２", "Hannin no Ajito 2", "The Culprit's Hideout 2", "1:44"],
            ["52", "推理１", "Suiri 1", "Deduction 1", "1:06"],
            ["53", "コナンのRock＆Roll １", "Konan no Rock & Roll 1", "Conan's Rock & Roll 1", "2:24"],
            ["54", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "1:52"],
            ["55", "悪のテーマ２", "Aku no Tēma 2", "Theme of Evil 2", "0:59"],
            ["56", "毛利小五郎のテーマ１", "Mōri Kogorō no Tēma 1", "Kogoro Mouri's Theme 1", "1:34"],
            ["57", "コナンの勝利", "Konan no Shōri", "Conan's Victory", "2:07"],
            ["58", "沈む夕陽２", "Shizumu Yūhi 2", "Depressing Sunset 2", "2:02"],
            ["59", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "4:07"],
            ["60", "のんびり気分２", "Nonbiri Kibun 2", "Carefree Feeling 2", "2:56"],
            ["61", "阿笠博士のテーマ", "Agasa Hakase no Tēma", "Professor Agasa's Theme", "1:58"],
            ["62", "事件現場３", "Jiken Genba 3", "Scene of the Case 3", "2:06"],
            ["63", "緊迫２", "Kinpaku 2", "Tension 2", "1:58"],
            ["64", "事件解明", "Jiken Kaimei", "Case Clarification", "2:08"],
            ["65", "それいけコナン２", "Soreike Konan 2", "Let's Go Conan 2", "3:05"],
            ["66", "コナンのRock＆Roll ２", "Konan no Rock & Roll 2", "Conan's Rock & Roll 2", "2:49"],
            ["67", "毛利小五郎のテーマ２", "Mōri Kogorō no Tēma 2", "Kogoro Mouri's Theme 2", "1:53"],
            ["68", "沈む夕陽３", "Shizumu Yūhi 3", "Depressing Sunset 3", "1:56"],
            ["69", "はずむ蘭", "Hazumu Ran", "Bouncing Ran", "2:13"],
            ["70", "コナンのテーマ２", "Konan no Tēma 2", "Conan's Theme 2", "2:48"]
        ]
    },
    {
        Detective_Conan_Original_Soundtrack_3: [
            ["1", "名探偵コナン 新メインテーマ", "Meitantei Konan Shin Mein Tēma", "Detective Conan New Main Theme", "3:16"],
            ["2", "ブラディービーナス （歌：速水清司）", "Buradii Biinasu (Uta: Hayami Seiji)", "Bloody Venus (Sung By: Seiji Hayami)", "3:36"],
            ["3", "捜査開始", "Sōsa Kaishi", "The Investigation Begins", "3:01"],
            ["4", "新一のテーマ", "Shin'ichi no Tēma", "Shinichi's Theme", "2:48"],
            ["5", "新一・追跡のテーマ", "Shin'ichi・Tsuiseki no Tēma", "Shinichi's Pursuit Theme", "2:55"],
            ["6", "西の名探偵", "Nishi no Meitantei", "The Great Detective of the West", "2:53"],
            ["7", "闇の男爵 ナイトバロンのテーマ", "Yami no Danshaku Naito Baron no Tēma", "Baron of the Darkness, The Night Baron's Theme", "2:55"],
            ["8", "コナンの勇気", "Konan no Yūki", "Conan's Courage", "3:04"],
            ["9", "怪人包帯男１", "Kaijin Hōtai Otoko 1", "The Mysterious Bandaged Man 1", "3:03"],
            ["10", "少年探偵団のテーマ", "Shōnen Tanteidan no Tēma", "The Detective Boys' Theme", "3:17"],
            ["11", "昼下がりの天使たち", "Hirusagari no Tenshitachi", "Early Afternoon Angels", "3:33"],
            ["12", "ブラディービーナス （歌：小坂水澄）", "Buradii Biinasu (Uta: Kosaka Misumi)", "Bloody Venus (Sung By: Misumi Kosaka)", "3:25"],
            ["13", "激突", "Gekitotsu", "Clash", "3:09"],
            ["14", "想い出", "Omoide", "Memories", "3:39"],
            ["15", "悲劇のヒロイン", "Higeki no Hiroin", "Tragic Heroine", "2:15"],
            ["16", "星の愛 （歌：速見清司）", "Hoshi no Ai (Uta: Hayami Seiji)", "Star Love (Sung By: Seiji Hayami)", "2:57"],
            ["17", "ひらめき", "Hirameki", "Flash", "2:52"],
            ["18", "怪人包帯男２", "Kaijin Hōtai Otoko 2", "The Mysterious Bandaged Man 2", "1:25"],
            ["19", "謎解き（その１）", "Nazotoki (Sono 1)", "Riddle Solution (Part 1)", "1:24"],
            ["20", "サスペンス～危機感", "Sasupensu ~ Kikikan", "Suspense ~ Impending Crisis", "1:12"],
            ["21", "謎解き（その２）", "Nazotoki (Sono 2)", "Riddle Solution (Part 2)", "2:07"],
            ["22", "忍び寄る影", "Shinobiyoru Kage", "Creeping Shadow", "1:26"],
            ["23", "陰謀", "Inbō", "Conspiracy", "1:10"],
            ["24", "新一の事件解明", "Shin'ichi no Jiken Kaimei", "Shinichi's Case Clarification", "2:14"],
            ["25", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "1:31"],
            ["26", "事件の謎", "Jiken no Nazo", "Mystery of the Case", "2:32"],
            ["27", "希望", "Kibō", "Hope", "1:59"]
        ]
    },
    {
        Detective_Conan_Original_Soundtrack_4_Isoge_Shōnen_Tanteidan: [
            ["1", "少年探偵団への依頼書", "Shōnen Tanteidan e no Iraisho", "A Written Request to the Detective Boys", "1:45"],
            ["2", "急げ！少年探偵団", "Isoge! Shōnen Tanteidan", "Hurry! The Detective Boys", "2:11"],
            ["3", "聞き込み捜査", "Kikikomisōsa", "Investigation Legwork", "1:34"],
            ["4", "追跡スリリング", "Tsuiseki Suriringu", "Thrilling Pursuit", "1:40"],
            ["5", "陽気な仲間", "Yōki na Nakama", "Cheerful Friends", "0:48"],
            ["6", "みんなで楽しくキノコ狩り", "Minna de Tanoshiku Kinoko Kari", "Everyone's Fun Mushroom Hunting", "1:32"],
            ["7", "仲良し３人組", "Nakayoshi 3 Ningumi", "A Group of Three Very Close Friends", "0:53"],
            ["8", "バカンス気分", "Bakansu Kibun", "Vacation Feeling", "1:24"],
            ["9", "ほのぼの気分", "Honobono Kibun", "Heartwarming Feeling", "1:42"],
            ["10", "３人組の会話", "3 Ningumi no Kaiwa", "The Group of Three's Conversation", "1:33"],
            ["11", "元太のテーマ", "Genta no Tēma", "Genta's Theme", "1:01"],
            ["12", "光彦のテーマ", "Mitsuhiko no Tēma", "Mitsuhiko's Theme", "1:04"],
            ["13", "オセンチな歩美", "Osenchina Ayumi", "Sentimental Ayumi", "1:31"],
            ["14", "哀のテーマ （TVヴァージョン）", "Ai no Tēma (TV Vājon)", "Ai's Theme (TV Version)", "1:24"],
            ["15", "哀愁", "Aishū", "Sorrow", "1:34"],
            ["16", "廃墟の館", "Haikyo no Yakata", "The Ruins of an Abandoned Building", "1:29"],
            ["17", "キーワードの謎解き", "Kiiwādo no Nazotoki", "Keyword to the Riddle Solution", "1:43"],
            ["18", "暗号トリックの解読", "Angō Torikku no Kaidoku", "The Trick to Deciphering the Code", "1:31"],
            ["19", "カギを探せ！", "Kagi o Sagase!", "Search for the Key!", "1:36"],
            ["20", "夜の探索", "Yoru no Tansaku", "Night Search", "1:27"],
            ["21", "「何だこの痕跡は？」", "'Nanda Kono Konseki wa?'", "'What is this a trace o2f?'", "1:33"],
            ["22", "迷路", "Meiro", "Labyrinth", "1:26"],
            ["23", "悲しい出来事", "Kanashii Dekigoto", "A Sad Affair", "1:31"],
            ["24", "神秘", "Shinpi", "Mystery", "1:56"],
            ["25", "過去のあやまち", "Kako no Ayamachi", "Error of the Past", "1:37"],
            ["26", "別れ", "Wakare", "Parting", "1:34"],
            ["27", "友情", "Yūjou", "Friendship", "2:00"],
            ["28", "事件一件落着", "Jiken Ikken Rakuchaku", "The End of a Case", "0:59"]
        ]
    },
    {
        Detective_Conan_Original_Soundtrack_Super_Best: [
            ["1", "名探偵コナン～メイン・テーマ", "Meitantei Konan ~ Mein・Tēma", "Detective Conan ~ Main Theme", "02:34"],
            ["2", "名探偵コナン～新メイン・テーマ", "Meitantei Konan ~ Shin Mein・Tēma", "Detective Conan ~ New Main Theme", "03:18"],
            ["3", "対決のテーマ", "Taiketsu no Tēma", "Showdown Theme", "03:01"],
            ["4", "少年探偵団のテーマ", "Shōnen Tanteidan no Tēma", "The Detective Boys' Theme", "03:19"],
            ["5", "コナンのテーマ", "Konan no Tēma", "Conan's Theme", "02:52"],
            ["6", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "04:12"],
            ["7", "コナンの勝利", "Konan no Shōri", "Conan's Victory", "02:10"],
            ["8", "はずむ蘭", "Hazumu Ran", "Bouncing Ran", "02:18"],
            ["9", "阿笠博士のテーマ", "Agasa Hakase no Tēma", "Professor Agasa's Theme", "02:11"],
            ["10", "蘭・愛のテーマ （ギター・ヴァージョン）", "Ran・Ai no Tēma (Gitā・Vājon)", "Ran's Love Theme (Guitar Version)", "02:05"],
            ["11", "英国風館", "Eikoku Fūkan", "Seal of England", "02:59"],
            ["12", "捜査開始 （摩天楼ヴァージョン)", "Sōsa Kaishi (Mantenrō Vājon)", "The Investigation Begins (Skyscraper Version)", "03:05"],
            ["13", "名探偵コナン～メイン・テーマ （摩天楼ヴァージョン）", "Meitantei Konan ~ Mein・Tēma (Mantenrō Vājon)", "Detective Conan ~ Main Theme (Skyscraper Version)", "02:30"],
            ["14", "悪のテーマ", "Aku no Tēma", "Theme of Evil", "01:51"],
            ["15", "毛利小五郎のテーマ （ファンキー・ヴァージョン）", "Mōri Kogorō no Tēma (Fankii・Vājon)", "Kogoro Mouri's Theme (Funky Version)", "01:46"],
            ["16", "ひらめき", "Hirameki", "Flash", "02:44"],
            ["17", "西の名探偵", "Nishi no Meitantei", "The Great Detective of the West", "02:55"],
            ["18", "新一のテーマ", "Shin'ichi no Tēma", "Shinichi's Theme", "02:50"],
            ["19", "小さな巨人", "Chiisa na Kyojin", "A Small Great Person", "01:20"],
            ["20", "キミがいれば 歌・伊織", "Kimi ga Ireba Uta・Iori", "If You're There Sung By・Iori", "03:07"],
            ["21", "犯人のアジト （いよいよヴァージョン）", "Hannin no Ajito (Iyoiyo Vājon)", "The Culprit's Hideout (More and More Version)", "01:47"],
            ["22", "コナンの危機", "Konan no Kiki", "Conan's Crisis", "00:50"],
            ["23", "脅迫　パート２", "Kyōhaku Pāto 2", "Threat Part 2", "01:02"],
            ["24", "新一・追跡のテーマ", "Shin'ichi・Tsuiseki no Tēma", "Shinichi's Pursuit Theme", "02:57"],
            ["25", "想い出", "Omoide", "Memories", "03:41"],
            ["26", "事件現場 （謎ヴァージョン）", "Jiken Genba (Nazo Vājon)", "Scene of the Case (Mystery Version)", "01:27"],
            ["27", "推理 （オリジナル・ヴァージョン）", "Suiri (Orijinaru・Vājon)", "Deduction (Original Version)", "01:09"],
            ["28", "忍び寄る影", "Shinobiyoru Kage", "Creeping Shadow", "01:28"],
            ["29", "昼下がりの天使たち", "Hirusagari no Tenshitachi", "Early Afternoon Angels", "03:35"],
            ["30", "名探偵コナン～メイン・テーマ （ヴォーカル・ヴァージョン）", "Meitantei Konan ~ Mein・Tēma (Vōkaru・Vājon)", "Detective Conan ~ Main Theme (Vocal Version)", "01:54"]
        ]
    },
    {
        Detective_Conan_Original_Soundtrack_Super_Best_2: [
            ["1", "名探偵コナン－メイン・テーマ（ベイカー街ヴァージョン）", "Meitantei Konan - Mein・Tēma (Beikā Gai Vājon)", "Detective Conan - Main Theme (Baker Street Version)", "03:11"],
            ["2", "走るリムジン１", "Hashiru Rimujin 1", "Traveling Limousine 1", "03:19"],
            ["3", "ツインタワービルへ（スーパー・ベスト２ヴァージョン）", "Tsuin Tawaa Biru e (Sūpā・Besuto 2 Vājon)", "To the Twin Tower Building (Super Best 2 Version)", "02:19"],
            ["4", "ゲームショー", "Gēmu Shō", "Game Show", "02:42"],
            ["5", "スペードのエース", "Supēdo no Ēsu", "The Ace of Spades", "03:27"],
            ["6", "ホームズの部屋", "Hōmuzu no Heya", "Holmes' Room", "02:23"],
            ["7", "蘭・愛のテーマ", "Ran・Ai no Tēma", "Ran's Love Theme", "03:06"],
            ["8", "昼下がりの天使たち （摩天楼ヴァージョン）", "Hirusagari no Tenshitachi (Mantenrō Vājon)", "Early Afternoon Angels (Skyscraper Version)", "03:33"],
            ["9", "想い出 （世紀末ヴァージョン）", "Omoide (Seikimatsu Vājon)", "Memories (Last Century Version)", "03:35"],
            ["10", "少年探偵団のテーマ （摩天楼ヴァージョン）", "Shōnen Tanteidan no Tēma (Mantenrou Vājon)", "The Detective Boys' Theme (Skyscraper Version)", "03:13"],
            ["11", "友情", "Yūjō", "Friendship", "02:00"],
            ["12", "トリック", "Torikku", "Trick", "02:25"],
            ["13", "アクアクリスタル内へ", "Akua Kurisutaru Uchi e", "Inside Aqua Crystal", "03:16"],
            ["14", "名探偵コナン－メイン・テーマ （世紀末ヴァージョン）", "Meitantei Konan - Mein・Tēma (Seikimatsu Vājon)", "Detective Conan - Main Theme (Last Century Version)", "02:47"],
            ["15", "I’LL BE THERE （歌・菅井えり）", "I'LL BE THERE (Uta・Sugai Eri)", "I'LL BE THERE (Sung By・Eri Sugai)", "01:41"],
            ["16", "怪盗キッドの予告状１", "Kaitō Kiddo no Yokokujō 1", "Kaitou Kid's Manifesto 1", "02:45"],
            ["17", "蘭のテーマ （世紀末ヴァージョン）", "Ran no Tēma (Seikimatsu Vājon)", "Ran's Theme (Last Century Version)", "04:11"],
            ["18", "暗殺者のテーマ～事件の予感", "Ansatsusha no Tēma ~ Jiken no Yokan", "Assassin's Theme ~ Foreboding Case", "03:37"],
            ["19", "コナン行動開始！", "Konan Kōdō Kaishi!", "Conan, Move Out!", "02:28"],
            ["20", "驚愕の真実", "Kyōgaku no Shinjitsu", "Surprising Truth", "01:23"],
            ["21", "究極の推理", "Kyūkyoku no Suiri", "Final Deduction", "02:51"],
            ["22", "二人のデート", "Futari no Dēto", "Their Date", "03:12"]
        ]
    },
    {
        Detective_Conan_The_Time_Bombed_Skyscraper_Original_Soundtrack: [
            ["1", "名探偵コナン・メインテーマ （摩天楼ヴァージョン）", "Meitantei Konan・Mein Tēma (Matenrō Vājon)", "Detective Conan Main Theme (Skyscraper Version)", "2:29"],
            ["2", "英国風館", "Eikokufū Yakata", "English Style Mansion", "2:56"],
            ["3", "時計じかけの摩天楼", "Tokei Jikake no Matenrō", "The Time-Bombed Skyscraper", "3:26"],
            ["4", "爆破犯人のテーマ", "Bakuha Hannin no Tēma", "Bomber's Theme", "3:52"],
            ["5", "犯人からの電話", "Hannin Kara no Denwa", "Phone Call From the Culprit", "0:48"],
            ["6", "爆破予告", "Bakuha Yokoku", "Bomb Warning", "1:22"],
            ["7", "爆弾処理", "Bakudan Shori", "Bomb Disposal", "2:51"],
            ["8", "蘭のテーマ （摩天楼ヴァージョン）", "Ran no Tēma (Matenrō Vājon)", "Ran's Theme (Skyscraper Version)", "4:39"],
            ["9", "少年探偵団のテーマ （摩天楼ヴァージョン）", "Shōnen Tanteidan no Tēma (Matenrō Vājon)", "The Detective Boys' Theme (Skyscraper Version)", "3:12"],
            ["10", "陰謀 （摩天楼ヴァージョン）", "Inbō (Matenrō Vājon)", "Conspiracy (Skyscraper Version)", "2:23"],
            ["11", "忍び寄る危機", "Shinobiyoru Kiki", "Incoming Crisis", "1:45"],
            ["12", "緊急指令", "Kinkyū Shirei", "Emergency Orders", "4:12"],
            ["13", "対決のテーマ （摩天楼ヴァージョン）", "Taiketsu no Tēma (Matenrō Vājon)", "Showdown Theme (Skyscraper Version)", "3:13"],
            ["14", "捜査開始 （摩天楼ヴァージョン）", "Sōsa Kaishi (Matenrō Vājon)", "The Investigation Begins (Skyscraper Version)", "3:04"],
            ["15", "西の名探偵 （摩天楼ヴァージョン）", "Nishi no Meitantei (Matenrō Vājon)", "The Great Detective of the West (Skyscraper Version)", "3:00"],
            ["16", "昼下がりの天使たち （摩天楼ヴァージョン）", "Hirusagari no Tenshitachi (Matenrō Vājon)", "Early Afternoon Angels (Skyscraper Version)", "3:32"],
            ["17", "想い出 （摩天楼ヴァージョン）", "Omoide (Matenrō Vājon)", "Memories (Skyscraper Version)", "3:38"]
        ]
    },
    {
        Detective_Conan_The_Fourteenth_Target_Original_Soundtrack: [
            ["1", "名探偵コナン メイン・テーマ （標的ヴァージョン）", "Meitantei Konan Mein・Tēma (Hyōteki Vājon)", "Detective Conan Main Theme (Target Version)", "2:52"],
            ["2", "恋のトランプゲーム占い", "Koi no Toranpu Gēmu Uranai", "Love's Fortune-Telling Card Game", "0:37"],
            ["3", "母への想い", "Haha e no Omoi", "Thoughts of Mother", "2:00"],
            ["4", "ワインをのんで", "Wain o Nonde", "Drinking Wine", "3:43"],
            ["5", "ターゲット サスペンスＡ", "Tāgetto Sasupensu A", "Target Suspense A", "0:12"],
            ["6", "ターゲット サスペンスＢ", "Tāgetto Sasupensu B", "Target Suspense B", "0:17"],
            ["7", "ターゲット サスペンスＣ", "Tāgetto Sasupensu C", "Target Suspense C", "0:16"],
            ["8", "ターゲット サスペンスＤ", "Tāgetto Sasupensu D", "Target Suspense D", "0:18"],
            ["9", "コナンの大作戦１", "Konan no Daisakusen 1", "Conan's Big Battle 1", "1:51"],
            ["10", "コナンが通る", "Konan ga Tōru", "Conan Passes By", "1:11"],
            ["11", "カード賭博のボス", "Kādo Tobaku no Bosu", "The Card Gambler's Boss", "1:54"],
            ["12", "ターゲット サスペンスＥ", "Tāgetto Sasupensu E", "Target Suspense E", "0:27"],
            ["13", "絆", "Kizuna", "Bonds", "4:04"],
            ["14", "犯人の謎", "Hannin no Nazo", "The Mystery of the Culprit", "2:18"],
            ["15", "次のターゲット！", "Tsugi no Tāgetto!", "The Next Target!", "2:10"],
            ["16", "何かが起きる…", "Nanika ga Okiru...", "Something Happened...", "1:00"],
            ["17", "トリック", "Torikku", "Trick", "2:22"],
            ["18", "アクアクリスタル", "Akua Kurisutaru", "Aqua Crystal", "3:17"],
            ["19", "アクアクリスタル内へ", "Akua Kurisutaru Uchi e", "Inside Aqua Crystal", "3:14"],
            ["20", "ターゲット サスペンスＦ", "Tāgetto Sasupensu F", "Target Suspense F", "0:45"],
            ["21", "ターゲット サスペンスＧ", "Tāgetto Sasupensu G", "Target Suspense G", "0:37"],
            ["22", "ターゲット サスペンスＨ", "Tāgetto Sasupensu H", "Target Suspense H", "0:11"],
            ["23", "ターゲット サスペンスＩ", "Tāgetto Sasupensu I", "Target Suspense I", "0:33"],
            ["24", "ターゲット サスペンスＪ", "Tāgetto Sasupensu J", "Target Suspense J", "0:48"],
            ["25", "犯人の目星", "Hannin no Meboshi", "The Culprit's Objective", "0:38"],
            ["26", "迫り来る危機", "Semari Kuru Kiki", "Incoming Crisis", "0:31"],
            ["27", "コナンの大作戦２", "Konan no Daisakusen 2", "Conan's Big Battle 2", "1:08"],
            ["28", "真相究明", "Shinsō Kyūmei", "Investigating the Truth", "2:15"],
            ["29", "謎の解明　 （ターゲット サスペンスＫ）", "Nazo no Kaimei (Tāgetto Sasupensu K)", "Clearing the Mystery (Target Suspense K)", "1:45"],
            ["30", "スペードのエース", "Supēdo no Ēsu", "The Ace of Spades", "3:27"],
            ["31", "挫折", "Zasetsu", "Frustration", "1:53"],
            ["32", "殺意", "Satsui", "Murderous Intent", "1:13"],
            ["33", "一触即発", "Isshokusokuhatsu", "Critical Situation", "1:54"],
            ["34", "Aの予感 （歌：伊織）", "A no Yokan (Uta: Iori)", "A's Premonition (Sung By: Iori)", "1:35"],
            ["35", "別居の真相", "Bekkyo no Shinsō", "The Truth Behind the Separation", "0:21"],
            ["36", "KIZUNA （ヴォーカル・ヴァージョン） （歌：伊織）", "KIZUNA (Vōkaru・Vājon) (Uta: Iori)", "Bonds (Vocal Version) (Sung By: Iori)", "4:07"]
        ]
    },
    {
        Detective_Conan_The_Last_Wizard_of_the_Century_Original_Soundtrack: [
            ["1", "名探偵コナン メイン・テーマ （世紀末ヴァージョン）", "Meitantei Konan Mein・Tēma (Seikimatsu Vājon)", "Detective Conan Main Theme (Last Century Version)", "2:47"],
            ["2", "I’ll be there （歌：菅井えり）", "I'll be there (Uta: Sugai Eri)", "I'll be there (Sung By: Eri Sugai)", "1:40"],
            ["3", "走るリムジン１", "Hashiru Rimujin 1", "Limousine Ride 1", "3:18"],
            ["4", "怪盗キッド出現", "Kaitō Kiddo Shutsugen", "Kaitou Kid Appears", "1:06"],
            ["5", "出動のテーマ１～予感", "Shutsudō no Tēma 1 ~ Yokan", "Mission Theme 1 ~ Premonition", "1:33"],
            ["6", "怪盗キッドの予告状１", "Kaitō Kiddo no Yokokujō 1", "Kaitou Kid's Manifesto 1", "2:43"],
            ["7", "恋のトランプゲーム占い （世紀末ヴァージョン）", "Koi no Toranpu Gēmu Uranai (Seikimatsu Vājon)", "Love's Fortune-Telling Card Game (Last Century Version)", "0:36"],
            ["8", "蘭のテーマ （世紀末ヴァージョン）", "Ran no Tēma (Seikimatsu Vājon)", "Ran's Theme (Last Century Version)", "4:09"],
            ["9", "イースターエッグの謎", "Iisutā Eggu no Nazo", "Mystery of the Easter Egg", "2:03"],
            ["10", "怪盗キッドの予告状２", "Kaitō Kiddo no Yokokujō 2", "Kaitou Kid's Manifesto 2", "0:45"],
            ["11", "スケボー大作戦", "Sukebō Daisakusen", "Big Skateboard Battle", "2:16"],
            ["12", "行き止まり", "Ikidomari", "Dead End", "1:16"],
            ["13", "コナン ｖｓ 怪盗キッド", "Konan vs Kaitō Kiddo", "Conan vs Kaitou Kid", "1:56"],
            ["14", "出動のテーマ２～サイレンサー", "Shutsudō no Tēma 2 ~ Sairensā", "Mission Theme 2 ~ Silencer", "1:15"],
            ["15", "古城の神秘", "Kojō no Shinpi", "Mystery of the Old Castle", "1:00"],
            ["16", "尋問", "Jinmon", "Interrogation", "4:01"],
            ["17", "阿笠博士のテーマ （世紀末ヴァージョン）", "Agasa Hakase no Tēma (Seikimatsu Vājon)", "Professor Agasa's Theme (Last Century Version)", "2:04"],
            ["18", "想い出 （世紀末ヴァージョン）", "Omoide (Seikimatsu Vājon)", "Memories (Last Century Version)", "3:33"],
            ["19", "空飛ぶ怪盗キッド", "Soratobu Kaitō Kiddo", "Kaitou Kid Takes Flight", "1:00"],
            ["20", "走るリムジン２", "Hashiru Rimujin 2", "Traveling Limousine 2", "0:49"],
            ["21", "赤い光のスナイパー１", "Akai Hikari no Sunaipā 1", "The Sniper's Red Light 1", "1:01"],
            ["22", "古城の探索", "Kojō no Tansaku", "Exploration of the Old Castle", "2:14"],
            ["23", "秘密の地下室", "Himitsu no Chikashitsu", "The Basement's Secrets", "2:57"],
            ["24", "古城のテーマ", "Kojō no Tēma", "The Old Castle's Theme", "3:02"],
            ["25", "赤い光のスナイパー２", "Akai Hikari no Sunaipā 2", "The Sniper's Red Light 2", "3:29"],
            ["26", "キミがいれば （世紀末ヴァージョン）（歌：伊織）", "Kimi ga Ireba (Seikimatsu Vājon) (Uta: Iori)", "If You're There (Last Century Version) (Sung By: Iori)", "3:05"],
            ["27", "城が燃えている", "Shiro ga Moete Iru", "The Castle Burns", "2:03"],
            ["28", "愛はいつも　（歌：伊織）", "Ai wa Itsumo (Uta: Iori)", "Love is Always (Sung By: Iori)", "1:48"],
            ["29", "飛び立つ鳩　（歌：菅井えり）", "Tobitatsu Hato (Uta: Sugai Eri)", "Flying Doves (Sung By: Eri Sugai)", "2:57"]
        ]
    },
    {
        Detective_Conan_Captured_in_Her_Eyes_Original_Soundtrack: [
            ["1", "暗殺者のテーマ─事件の予感", "Ansatsusha no Tēma - Jiken no Yokan", "Assassin's Theme - Foreboding Case", "3:36"],
            ["2", "名探偵コナンメイン・テーマ（暗殺者ヴァージョン）", "Meitantei Konan Mein・Tēma (Ansatsusha Vājon)", "Detective Conan Main Theme (Assassin Version)", "2:34"],
            ["3", "トロピカルランド", "Toropikaru Rando", "Tropical Land", "4:42"],
            ["4", "とっておきクイズ", "Totte Oki Kuizu", "Take the Quiz", "2:25"],
            ["5", "コナン組曲－Captured In Her Eyes", "Konan Kumikyoku - Captured in Her Eyes", "Conan Suite - Captured in Her Eyes", "9:42"],
            ["6", "事情聴取", "Jijōchōshu", "Police Interrogation", "2:30"],
            ["7", "黒い影─挑戦", "Kuroi Kage - Chōsen", "Black Shadow - Challenge", "1:04"],
            ["8", "トロピカルランドの想い出", "Toropikaru Rando no Omoide", "Memories of Tropical Land", "2:56"],
            ["9", "暗殺者のテーマ─忍び寄る魔手", "Ansatsusha no Tēma - Shinobiyoru Mashu", "Assassin's Theme - The Devil's Hand Approaches", "2:09"],
            ["10", "暗殺者のテーマ─狙撃", "Ansatsusha no Tēma - Sogeki", "Assassin's Theme - Sniping", "1:42"],
            ["11", "運命の瞬間", "Unmei no Shunkan", "Destined Moment", "2:01"],
            ["12", "記憶喪失（影）", "Kiokusōshitsu (Kage)", "Amnesia (Shadow)", "1:31"],
            ["13", "目暮警部の告白", "Megure Keibu no Kokuhaku", "Inspector Megure's Confession", "2:12"],
            ["14", "Need not to know.", "Need not to know.", "Need not to know.", "2:35"],
            ["15", "顛末（TENMATSU）", "Tenmatsu (TENMATSU)", "The Facts (TENMATSU)", "2:14"],
            ["16", "新少年探偵団のテーマ", "Shin Shōnen Tanteidan no Tēma", "The New Detective Boys' Theme", "2:57"],
            ["17", "記憶喪失（光）", "Kiokusōshitsu (Hikari)", "Amnesia (Light)", "4:07"],
            ["18", "容疑者判明", "Yōgisha Hanmei", "Identifying the Suspect", "1:40"],
            ["19", "コナン行動開始！", "Konan Kōdō Kaishi!", "Conan, Move Out!", "2:26"],
            ["20", "蘭が危ない！", "Ran ga Abunai!", "Ran's in Danger!", "2:22"],
            ["21", "犯人（スナイパー）の正体", "Hannin (Sunaipā) no Shōtai", "The Culprit's (Sniper's) Identity", "1:07"],
            ["22", "驚愕の真実", "Kyōgaku no Shinjitsu", "Surprising Truth", "1:21"],
            ["23", "漆黒の殺意", "Shikkoku no Satsui", "Jet Black Murderous Intent", "2:28"],
            ["24", "洞窟内の逃走", "Dōkutsunai no Tōsō", "Escaping From the Cave", "2:10"],
            ["25", "５・４・３・２・１！", "5・4・3・2・1!", "5・4・3・2・1!", "1:51"],
            ["26", "キミがいれば （暗殺者ヴァージョン）（歌：伊織）", "Kimi ga Ireba (Ansatsusha Vājon) (Uta: Iori)", "If You're There (Assassin Version) (Sung By: Iori)", "3:06"],
            ["27", "二人のデート", "Futari no Dēto", "Their Date", "3:15"],
            ["28", "THE END（あれまぁ～）", "THE END (Aremā~)", "THE END ('Good Heavens!')", "0:17"]
        ]
    },
    {
        M5: [
            ["1", "名探偵コナン メイン・テーマ （天国ヴァージョン）", "Meitantei Konan Mein・Tēma (Tengoku Vājon)", "Detective Conan Main Theme (Heaven Version)", "3:11"],
            ["2", "ドライブ気分", "Doraibu Kibun", "Driving Feeling", "1:10"],
            ["3", "阿笠博士を囲んで", "Agasa Hakase o Kakonde", "Professor Agasa's Surroundings", "0:45"],
            ["4", "阿笠クイズ", "Agasa Kuizu", "Agasa's Quiz", "0:34"],
            ["5", "哀が電話を…～ジンのテーマＡ", "Ai ga Denwa o... ~ Jin no Tēma A", "Ai's Phonecall to... ~ Gin's Theme A", "0:46"],
            ["6", "ツインタワービルへ", "Tsuin Tawā Biru e", "To the Twin Tower Buildings", "1:52"],
            ["7", "１０年後の歩美", "10 Nengo no Ayumi", "Ayumi 10 Years Later", "1:02"],
            ["8", "パーティー会場へ", "Pātii Kaijō e", "To the Party Meeting Place", "1:32"],
            ["9", "雄大な富士山", "Yūdai na Fujisan", "Grand Mt. Fuji", "0:51"],
            ["10", "哀のサスペンス～ジンのテーマＢ", "Ai no Sasupensu ~ Jin no Tēma B", "Ai's Suspense ~ Gin's Theme B", "1:55"],
            ["11", "蘭のお姉さんぶり", "Ran no Onēsan Buri", "Ran's Elder Sister Style", "2:01"],
            ["12", "捜査会議", "Sōsa Kaigi", "Investigation Meeting", "1:08"],
            ["13", "容疑者は？", "Yōgisha wa?", "The Suspect Is?", "1:51"],
            ["14", "コナン登場～少年探偵団捜査へ", "Konan Tōjō ~ Shōnen Tanteidan Sōsa e", "Conan Appears ~ The Detective Boys Investigate", "1:15"],
            ["15", "映画BGM", "Eiga BGM", "Movie BGM", "0:27"],
            ["16", "怪しげな部屋", "Ayashige na Heya", "Suspicious Room", "1:05"],
            ["17", "哀のテーマＡ", "Ai no Tēma A", "Ai's Theme A", "0:58"],
            ["18", "第２の殺人事件", "Dai 2 no Satsujin Jiken", "The Second Murder Case", "0:33"],
            ["19", "現場検証", "Genba Kenshō", "On Site Investigation", "1:22"],
            ["20", "ジンのテーマＣ", "Jin no Tēma C", "Gin's Theme C", "1:57"],
            ["21", "逆探知", "Gyakutanchi", "Phone Trace", "0:32"],
            ["22", "哀のテーマＢ （ピアノ・ヴァージョン）", "Ai no Tēma B (Piano Vājon)", "Ai's Theme B (Piano Version)", "1:22"],
            ["23", "黒装束の謎", "Kuroshōzoku no Nazo", "Mystery of Those in Black", "0:43"],
            ["24", "３０秒当てゲーム", "30 Byō Atte Gēmu", "30 Second Concentration Game", "1:23"],
            ["25", "ゲームスタート～ピッタリ賞", "Gēmu Sutāto ~ Pittari Shō", "Game Start ~ Exact Prize", "1:15"],
            ["26", "日本画の紹介", "Nihonga no Shōkai", "Introducing the Japanese Painting", "0:43"],
            ["27", "第３の犠牲者", "Dai 3 no Giseisha", "The Third Victim", "0:47"],
            ["28", "小五郎の推理", "Kogorō no Suiri", "Kogoro's Deduction", "1:13"],
            ["29", "爆破計画スタート", "Bakuha Keikaku Sutāto", "Bombing Plan, Start", "1:33"],
            ["30", "出動開始", "Shutsudō Kaishi", "The First Move", "2:36"],
            ["31", "コナン推理", "Konan Suiri", "Conan's Deduction", "1:09"],
            ["32", "エレベーターからの脱出", "Erebētā Kara no Dasshutsu", "Escaping From the Elevator", "0:48"],
            ["33", "煙が行く手を阻む～ジンのテーマＤ", "Kebu ga Yukute o Habamu ~ Jin no Tēma D", "Smoke Obstructs the Way ~ Gin's Theme D", "1:08"],
            ["34", "蘭の決意～ホースに火が", "Ran no Ketsui ~ Hōsu ni Hi ga", "Ran's Determination ~ Hose and Fire", "2:29"],
            ["35", "危機迫る～コナン出動", "Kiki Semaru ~ Konan Shutsudō", "Approaching Crisis ~ Conan's Move", "1:08"],
            ["36", "コナンの直感", "Konan no Chokkan", "Conan's Intuition", "1:37"],
            ["37", "男の心情", "Otoko no Shinjō", "A Man's Feelings", "0:39"],
            ["38", "怒りのメッセージ", "Ikari no Messēji", "Message of Anger", "0:57"],
            ["39", "コナンの決断", "Konan no Ketsudan", "Conan's Decision", "1:10"],
            ["40", "哀の予感～ジンのテーマＥ", "Ai no Yokan ~ Jin no Tēma E", "Ai's Premonition ~ Gin's Theme E", "1:09"],
            ["41", "テーブルの下に爆弾～急げ", "Tēburu no Shita ni Bakudan ~ Isoge", "Bomb Under the Table ~ Hurry", "1:16"],
            ["42", "コナンの賭け", "Konan no Kake", "Conan's Gamble", "1:33"],
            ["43", "作戦行動～いよいよ発進", "Sakusen Kōdō ~ Iyoiyo Hasshin", "Tactical Action ~ Departing At Last", "1:47"],
            ["44", "ジンのテーマＦ", "Jin no Tēma F", "Gin's Theme F", "0:44"],
            ["45", "哀のテーマＣ", "Ai no Tēma C", "Ai's Theme C", "2:04"],
            ["46", "ほのぼの", "Honobono", "Heartwarming", "1:14"],
            ["47", "エンディング", "Endingu", "Ending", "0:36"],
            ["48", "作戦行動 （ロング・ヴァージョン）", "Sakusen Kōdō (Rongu・Vājon)", "Tactical Action (Long Version)", "2:23"]
        ]
    }
];

export default soundtracks;