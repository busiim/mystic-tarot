const pentacleCards = [
    {
        name: "Ace of Pentacles",
        img: "images/pentacles01.jpg",
        meanings: {
            종합: "현실적인 성공의 씨앗이 뿌려집니다. 새로운 번영과 안정의 기회가 옵니다.",
            연애: "안정적이고 실질적인 관계가 시작됩니다. 결혼이나 약속을 하기 좋은 시기입니다.",
            금전: "횡재수나 새로운 수익원이 생깁니다. 금전적으로 아주 길한 소식이 들려옵니다.",
            학업: "노력의 대가로 장학금을 받거나 목표한 성적을 얻습니다. 토대가 튼튼해지는 시기입니다."
        },
        meanings_rev: {
            종합: "좋은 기회를 놓치거나 계획이 지연될 수 있습니다. 준비가 더 필요합니다.",
            연애: "관계의 가치관이 현실적으로 부딪힐 수 있습니다. 아직은 서두를 때가 아닙니다.",
            금전: "예상했던 돈이 들어오지 않거나 투자가 실패할 수 있습니다. 자산 관리에 주의하세요.",
            학업: "공부에 대한 보상이 늦어집니다. 기본기가 부족하여 성과가 잘 나오지 않습니다."
        },
        meanings_en: {
            General: "The seed of real-world success is being planted. A new opportunity for prosperity and stability has arrived.",
            Love: "A stable and grounded relationship is beginning. An excellent time to make commitments or promises.",
            Money: "A windfall or a new income source emerges. Exceptionally auspicious financial news is on its way.",
            Career: "Scholarship or top grades reward your efforts. Your foundation is growing stronger and more secure."
        },
        meanings_rev_en: {
            General: "A good opportunity may be missed or a plan delayed. More preparation is still needed.",
            Love: "Practical values in the relationship may clash. This is not yet the time to rush forward.",
            Money: "Expected money may not arrive or an investment could fail. Exercise caution in asset management.",
            Career: "Rewards for your study efforts are slow to arrive. Insufficient fundamentals are making it hard to produce results."
        }
    },
    {
        name: "Two of Pentacles",
        img: "images/pentacles02.jpg",
        meanings: {
            종합: "변화하는 상황 속에서 균형을 잡아야 합니다. 융통성 있는 대처가 필요합니다.",
            연애: "연애와 일 사이에서 고민하는 시기입니다. 적절한 시간 배분이 중요합니다.",
            금전: "자금의 회전이 활발합니다. 돌려막기가 필요할 수 있으나 관리는 가능한 수준입니다.",
            학업: "두 가지 이상의 과제를 병행하게 됩니다. 멀티태스킹 능력이 빛을 발합니다."
        },
        meanings_rev: {
            종합: "감당하기 힘든 상황에 처해 균형이 깨집니다. 선택과 집중이 절실합니다.",
            연애: "감정 기복이 심해 관계가 불안정해집니다. 한 사람에게 집중하지 못할 수 있습니다.",
            금전: "지출 조절에 실패해 재정적 혼란이 옵니다. 빚이 늘어나지 않도록 주의하세요.",
            학업: "너무 많은 일을 벌여 이도 저도 안 되는 상태입니다. 한 과목씩 끝내세요."
        },
        meanings_en: {
            General: "You must find your balance within a shifting situation. A flexible and adaptable response is needed.",
            Love: "You are caught between romance and work. Finding the right allocation of your time is critically important.",
            Money: "Cash is moving actively. A juggling act with funds may be necessary, but it remains manageable.",
            Career: "You will be juggling two or more assignments simultaneously. Your multitasking ability is rising to shine."
        },
        meanings_rev_en: {
            General: "An unmanageable situation is causing the balance to break down. Focus and prioritization are desperately needed.",
            Love: "Emotional ups and downs are destabilizing the relationship. You may be unable to commit to just one person.",
            Money: "Failure to control spending triggers financial chaos. Watch carefully to prevent debt from growing.",
            Career: "Too many things have been started at once and nothing is getting done. Finish each subject before moving on."
        }
    },
    {
        name: "Three of Pentacles",
        img: "images/pentacles03.jpg",
        meanings: {
            종합: "협력과 전문성이 인정받는 시기입니다. 팀워크를 통해 큰 성과를 냅니다.",
            연애: "함께 미래를 설계하고 맞춰가는 과정입니다. 주변의 축복을 받는 관계입니다.",
            금전: "기술이나 재능을 통해 수익이 발생합니다. 공동 투자나 사업에 아주 길합니다.",
            학업: "그룹 스터디나 팀 프로젝트에서 주도적인 역할을 합니다. 실력이 크게 향상됩니다."
        },
        meanings_rev: {
            종합: "협력이 잘 안 되고 기술이 부족하여 지체됩니다. 기초부터 다시 다져야 합니다.",
            연애: "사소한 생활 방식의 차이로 다툴 수 있습니다. 서로에 대한 존중이 필요합니다.",
            금전: "금전적인 배분 문제로 다툼이 생길 수 있습니다. 계약 관계를 명확히 하세요.",
            학업: "팀원과의 불화로 성적이 떨어질 수 있습니다. 독단적인 학습보다는 소통이 중요합니다."
        },
        meanings_en: {
            General: "A time when collaboration and professional skill are recognized and rewarded. Teamwork produces remarkable results.",
            Love: "You are designing a shared future and learning to adapt to each other. The relationship is blessed by those around you.",
            Money: "Skills and talent generate real income. Collaborative investments and business ventures look very favorable.",
            Career: "You take a leading role in group study or a team project. Your abilities improve dramatically."
        },
        meanings_rev_en: {
            General: "Poor teamwork and skill gaps are causing delays. The fundamentals need to be rebuilt from scratch.",
            Love: "Minor lifestyle differences may cause friction. Mutual respect must be consciously practiced.",
            Money: "Disputes over financial distribution may erupt. Make all contractual relationships explicit and clear.",
            Career: "Conflict with teammates may drag grades down. Open communication matters more than going it alone."
        }
    },
    {
        name: "Four of Pentacles",
        img: "images/pentacles04.jpg",
        meanings: {
            종합: "소유욕이 강해지고 안정을 추구합니다. 지키는 힘은 좋으나 변화에 취약합니다.",
            연애: "상대를 소유하려 하거나 집착할 수 있습니다. 마음의 여유를 가지는 것이 좋습니다.",
            금전: "돈을 모으는 운이 아주 좋습니다. 하지만 지나친 인색함은 주변 사람을 멀어지게 합니다.",
            학업: "아는 지식을 내 것으로 만드는 힘이 좋습니다. 보수적인 공부 방식이 유리합니다."
        },
        meanings_rev: {
            종합: "지나친 인색함으로 손해를 보거나 소중한 것을 잃을 수 있습니다. 내려놓음이 필요합니다.",
            연애: "집착을 버리고 자유를 찾거나, 반대로 관계가 소원해질 수 있습니다.",
            금전: "갑작스러운 큰 지출로 모아둔 돈이 나갈 수 있습니다. 융통성 없는 관리가 화가 됩니다.",
            학업: "암기 위주의 공부에 한계가 옵니다. 응용력을 키우기 위해 시야를 넓혀야 합니다."
        },
        meanings_en: {
            General: "A strong desire to possess and a drive to seek security. The power to hold on is good, but rigidity is a vulnerability.",
            Love: "You may be trying to possess or cling too tightly to your partner. Give yourself and them more room to breathe.",
            Money: "Your ability to save and accumulate money is exceptional. However, excessive stinginess will push people away.",
            Career: "Your ability to truly internalize knowledge is very strong. Conservative and methodical study approaches favor you."
        },
        meanings_rev_en: {
            General: "Excessive tightfistedness may cost you what truly matters. Letting go is necessary.",
            Love: "You release your clinging grip and seek freedom, or conversely, the relationship grows more distant.",
            Money: "A sudden large expense may drain the funds you have saved. Inflexible management is becoming a real liability.",
            Career: "Rote memorization is hitting its ceiling. You must broaden your perspective to develop real application skills."
        }
    },
    {
        name: "Five of Pentacles",
        img: "images/pentacles05.jpg",
        meanings: {
            종합: "어려운 고비가 예상됩니다. 혼자 고민하지 말고 주변에 도움을 요청하세요.",
            연애: "함께 고난을 겪으며 사랑이 깊어지거나, 경제적 문제로 힘든 연애를 합니다.",
            금전: "금전적으로 매우 힘든 시기입니다. 불필요한 지출을 0으로 줄이고 버텨야 합니다.",
            학업: "공부 환경이 나빠지거나 성적이 떨어져 좌절할 수 있습니다. 정신력이 답입니다."
        },
        meanings_rev: {
            종합: "긴 터널을 지나 희망이 보입니다. 경제적, 심리적 회복이 시작되는 기운입니다.",
            연애: "어려웠던 상황이 풀리고 안정을 찾습니다. 다시 데이트를 즐길 여유가 생깁니다.",
            금전: "금전적인 도움을 줄 귀인이 나타납니다. 빚을 갚거나 수입이 생기기 시작합니다.",
            학업: "슬럼프를 극복하고 다시 학습 환경이 좋아집니다. 성적이 반등하기 시작합니다."
        },
        meanings_en: {
            General: "A difficult challenge is ahead. Don't suffer alone—reach out and ask the people around you for help.",
            Love: "Hardship endured together deepens the love, or economic difficulties are placing real strain on the relationship.",
            Money: "A period of serious financial hardship. Cut every unnecessary expense to zero and simply endure.",
            Career: "Your study environment may deteriorate or grades may drop sharply. Mental fortitude is the ultimate answer."
        },
        meanings_rev_en: {
            General: "Light appears at the end of a long tunnel. Both economic and emotional recovery is beginning.",
            Love: "A difficult situation resolves and stability returns. You finally have the breathing room to enjoy dates again.",
            Money: "A benefactor who can provide financial help appears. Paying off debt or generating income begins.",
            Career: "The slump is overcome and the learning environment improves again. Grades begin their rebound."
        }
    },
    {
        name: "Six of Pentacles",
        img: "images/pentacles06.jpg",
        meanings: {
            종합: "베풂과 나눔의 미덕이 필요한 때입니다. 주는 만큼 다시 돌아오는 운입니다.",
            연애: "어느 한쪽이 챙겨주는 불균형한 사랑일 수 있지만, 서로 만족하는 관계입니다.",
            금전: "받을 돈을 받거나 빌려준 돈을 돌려받습니다. 재정적 원조를 받을 운도 있습니다.",
            학업: "재능 기부를 하거나 선배의 도움을 받아 공부합니다. 지식의 공유가 핵심입니다."
        },
        meanings_rev: {
            종합: "불공평한 대우를 받거나 이기적인 태도로 인해 갈등이 생깁니다. 균형을 찾으세요.",
            연애: "사랑을 보상으로 생각하거나 계산적인 태도를 보여 상대가 상처받을 수 있습니다.",
            금전: "사기를 당하거나 빌려준 돈을 받지 못할 수 있습니다. 금전 거래에 신중하세요.",
            학업: "노력에 비해 보상이 적습니다. 자신의 성과를 남에게 뺏기지 않도록 주의하세요."
        },
        meanings_en: {
            General: "The virtue of giving and sharing is called for now. What you give will return to you generously.",
            Love: "One person may be giving more than the other in an unbalanced love, yet both feel a measure of satisfaction.",
            Money: "Money owed to you returns, or a loan is repaid. There is also a chance of receiving financial assistance.",
            Career: "You contribute your talents to others or receive valuable guidance from a senior. Sharing knowledge is the key theme."
        },
        meanings_rev_en: {
            General: "Unfair treatment or a selfish attitude creates conflict. Seek a fair and balanced equilibrium.",
            Love: "Viewing love as a transaction or acting with calculated motives will cause your partner genuine pain.",
            Money: "You may be scammed or unable to recover money you lent. Exercise extreme caution in all financial dealings.",
            Career: "Your efforts bring fewer rewards than they deserve. Be careful that others don't take credit for your work."
        }
    },
    {
        name: "Seven of Pentacles",
        img: "images/pentacles07.jpg",
        meanings: {
            종합: "중간 점검이 필요한 시기입니다. 그동안의 노력이 잘 가고 있는지 돌아보세요.",
            연애: "관계를 다음 단계로 발전시키기 위해 고민하는 성숙한 단계입니다.",
            금전: "투자의 성과를 기다리는 중입니다. 조급해하지 말고 때를 기다리면 결실이 옵니다.",
            학업: "공부한 양을 점검하고 취약점을 파악하세요. 당장의 성적보다 내실이 중요합니다."
        },
        meanings_rev: {
            종합: "노력의 결실이 없어 허탈감을 느낄 수 있습니다. 방향을 잘못 잡았을 가능성이 큽니다.",
            연애: "오랜 노력에도 관계에 진전이 없어 지치게 됩니다. 미련을 버려야 할 수도 있습니다.",
            금전: "투자가 무산되거나 기대했던 수익이 전혀 없을 수 있습니다. 손절을 고민해 보세요.",
            학업: "공부 방식이 비효율적입니다. 시간만 투자하고 결과는 안 나오는 상태입니다."
        },
        meanings_en: {
            General: "A mid-point review is needed. Take a step back and assess whether all your effort is on the right track.",
            Love: "You have entered the mature stage of thoughtfully considering how to take the relationship to the next level.",
            Money: "You are waiting for the results of an investment to arrive. Remain patient—the harvest will come if you don't rush.",
            Career: "Audit the volume of your study and identify where the gaps are. Deep inner substance matters more than today's grades."
        },
        meanings_rev_en: {
            General: "A lack of results despite all the effort brings a hollow sense of defeat. The direction chosen may be wrong.",
            Love: "Long efforts with no real progress in the relationship lead to exhaustion. You may need to let go of some hope.",
            Money: "An investment falls through or the expected returns simply do not materialize. Consider the possibility of cutting losses.",
            Career: "The study method is deeply inefficient. Time is being invested but results refuse to follow."
        }
    },
    {
        name: "Eight of Pentacles",
        img: "images/pentacles08.jpg",
        meanings: {
            종합: "성실함과 장인 정신이 필요한 때입니다. 꾸준한 반복이 당신을 전문가로 만듭니다.",
            연애: "한결같은 사랑입니다. 화려하지는 않지만 성실하게 서로를 아끼는 단계입니다.",
            금전: "정직하게 일한 만큼 수입이 들어옵니다. 적금이나 저축에 아주 좋은 운입니다.",
            학업: "엉덩이 힘으로 공부할 때입니다. 성실하게 반복 학습을 하면 반드시 성공합니다."
        },
        meanings_rev: {
            종합: "지루함에 빠져 집중력이 흐트러집니다. 실수가 잦아지니 기본으로 돌아가세요.",
            연애: "연애가 너무 일상적이고 지루해집니다. 노력이 부족해 관계가 소원해질 수 있습니다.",
            금전: "잔재주를 부리다 오히려 손해를 봅니다. 일확천금을 노리는 투자는 실패합니다.",
            학업: "학습 의욕이 떨어지고 벼락치기에 의존하려 합니다. 성적이 떨어질 징조입니다."
        },
        meanings_en: {
            General: "A time that calls for diligence and the spirit of a true craftsperson. Steadfast repetition will make you a master.",
            Love: "A loyal, steady love. The relationship may not be glamorous, but it is sincerely devoted and carefully tended.",
            Money: "Honest, hard-earned income flows in reliably. Fixed savings and consistent deposits are strongly favored.",
            Career: "This is the time to study with raw persistence and endurance. Consistent, repetitive learning will guarantee success."
        },
        meanings_rev_en: {
            General: "Boredom sets in and concentration frays at the edges. Mistakes are multiplying—go back to first principles.",
            Love: "The relationship has become too routine and dull. Neglected effort is allowing distance to grow between you.",
            Money: "Clever shortcuts lead to losses instead. A get-rich-quick investment scheme will fail.",
            Career: "The will to study is fading and cramming at the last moment is becoming the fallback. Grades are about to slide."
        }
    },
    {
        name: "Nine of Pentacles",
        img: "images/pentacles09.jpg",
        meanings: {
            종합: "물질적, 정신적으로 매우 풍요로운 시기입니다. 스스로 일궈낸 성공을 즐기세요.",
            연애: "혼자여도 당당하고 행복한 상태입니다. 연애 중이라면 여유롭고 품격 있는 사랑입니다.",
            금전: "금전운이 최고조입니다. 안정적인 수입과 여유 자금으로 우아한 생활이 가능합니다.",
            학업: "독보적인 성과를 냅니다. 혼자 공부하는 것이 훨씬 효율적이며 성적이 크게 오릅니다."
        },
        meanings_rev: {
            종합: "겉모습에 치중하느라 속은 비어있을 수 있습니다. 허영심과 사치를 경계하세요.",
            연애: "상대의 재력이나 조건만 보고 있지는 않나요? 진실한 마음이 빠져있을 수 있습니다.",
            금전: "감당할 수 없는 과시용 지출로 재정이 위태롭습니다. 품위 유지를 위해 빚을 지지 마세요.",
            학업: "성적에 자만하여 노력을 멈춥니다. 겉핥기식 공부는 결국 밑천이 드러납니다."
        },
        meanings_en: {
            General: "A time of profound material and spiritual abundance. Enjoy the success you have built entirely by yourself.",
            Love: "You are confident and joyful even alone. If in a relationship, it is graceful, relaxed, and full of quiet elegance.",
            Money: "Financial fortune is at its absolute peak. Stable income and comfortable surplus allow for a truly refined lifestyle.",
            Career: "Your results are outstanding and set you apart from the rest. Studying alone is vastly more efficient, and your grades soar."
        },
        meanings_rev_en: {
            General: "You may be preoccupied with appearances while the inside feels empty. Guard against vanity and extravagance.",
            Love: "Are you evaluating your partner solely on material terms or external conditions? True affection may be absent.",
            Money: "Showy spending beyond your means is putting your finances in real jeopardy. Never go into debt for the sake of image.",
            Career: "Pride in your grades causes you to stop making effort. Surface-level study will eventually be exposed as shallow."
        }
    },
    {
        name: "Ten of Pentacles",
        img: "images/pentacles10.jpg",
        meanings: {
            종합: "가문의 영광과 부의 축적을 의미합니다. 오랜 전통과 안정을 누리는 시기입니다.",
            연애: "결혼이나 가족 간의 결합 등 매우 안정적인 관계입니다. 축복받는 사랑입니다.",
            금전: "유산 상속이나 큰 규모의 부동산 운이 있습니다. 자산이 아주 탄탄해집니다.",
            학업: "전통 있는 학교에 합격하거나 가족의 전폭적인 지원을 받아 공부하게 됩니다."
        },
        meanings_rev: {
            종합: "가족 간의 갈등이나 재산 분쟁이 생길 수 있습니다. 전통이 무너지는 징조입니다.",
            연애: "집안의 반대로 관계가 힘들어질 수 있습니다. 현실적인 벽이 높게 느껴집니다.",
            금전: "가족 관련 일로 큰돈이 나가거나 재산을 잃을 수 있습니다. 투명한 관리가 필요합니다.",
            학업: "주변의 기대가 너무 커서 부담감에 성적이 떨어집니다. 부담감을 털어내야 합니다."
        },
        meanings_en: {
            General: "A symbol of family legacy and accumulated wealth. A time of enjoying long-standing tradition and deep stability.",
            Love: "Marriage or a family union—a profoundly stable relationship. This is a truly blessed love.",
            Money: "An inheritance or significant real estate fortune is indicated. Your financial foundation becomes rock-solid.",
            Career: "You gain admission to a prestigious institution or receive full financial support from your family to pursue your studies."
        },
        meanings_rev_en: {
            General: "Family conflict or a dispute over inheritance may arise. The signs of a cherished tradition beginning to erode.",
            Love: "Family opposition may make the relationship extremely difficult. The practical walls feel very high.",
            Money: "Family-related issues may cause a large financial outflow or lead to asset loss. Transparent management is essential.",
            Career: "The weight of others' sky-high expectations is crushing your performance. You must shed that burden."
        }
    },
    {
        name: "Page of Pentacles",
        img: "images/pentacles11.jpg",
        meanings: {
            종합: "현실적이고 성실한 소식이 들려옵니다. 새로운 배움과 시작에 길한 운입니다.",
            연애: "조심스럽고 진중한 시작입니다. 자극적이지 않지만 신뢰가 가는 상대를 만납니다.",
            금전: "작은 수익이 발생하거나 저축을 시작하기 좋습니다. 돈에 대한 감각이 깨어납니다.",
            학업: "학구열이 매우 높습니다. 성실하게 기초를 닦기에 가장 좋은 시기입니다."
        },
        meanings_rev: {
            종합: "현실 감각이 부족해 계획이 무산됩니다. 게으름이나 무책임함을 경계하세요.",
            연애: "상대에게 너무 현실적인 잣대만 들이대고 있지는 않나요? 로맨스가 부족합니다.",
            금전: "푼돈을 아끼려다 큰돈을 잃을 수 있습니다. 돈 관리에 있어 시야가 좁아진 상태입니다.",
            학업: "공부에 집중하지 못하고 딴생각이 많습니다. 실천 없는 계획은 시간 낭비입니다."
        },
        meanings_en: {
            General: "Practical and diligent news is arriving. Fortune is extremely favorable for new learning and fresh beginnings.",
            Love: "A careful and serious start. You encounter a reliable, trustworthy person rather than a flashy, exciting one.",
            Money: "Small financial gains appear or it is an excellent time to begin saving. A genuine instinct for money is awakening.",
            Career: "Your academic drive is burning intensely. This is the best possible moment to lay down solid, careful foundations."
        },
        meanings_rev_en: {
            General: "Insufficient practical sense causes plans to fall apart. Laziness and irresponsibility are creeping in and must be addressed.",
            Love: "Are you applying too strictly practical a standard to your partner? The relationship is suffering from a lack of romance.",
            Money: "Trying to save small amounts may cost you larger ones. A narrow perspective is limiting your financial vision.",
            Career: "You cannot focus on studying and your mind keeps wandering elsewhere. Planning without action is simply a waste of time."
        }
    },
    {
        name: "Knight of Pentacles",
        img: "images/pentacles12.jpg",
        meanings: {
            종합: "가장 믿음직하고 성실한 기사입니다. 거북이처럼 천천히 가도 반드시 성공합니다.",
            연애: "변치 않는 해바라기 같은 사랑입니다. 속도는 느려도 가장 안전한 연애입니다.",
            금전: "안정적인 수입이 꾸준히 들어옵니다. 보수적이고 안전한 투자가 답입니다.",
            학업: "꾸준한 반복 학습이 실력이 됩니다. 묵묵히 앉아있는 시간이 합격을 만듭니다."
        },
        meanings_rev: {
            종합: "변화를 거부하고 정체되어 있습니다. 너무 보수적인 태도가 성장을 막습니다.",
            연애: "관계가 너무 고리타분하고 재미없게 느껴집니다. 변화를 주지 않으면 권태기가 옵니다.",
            금전: "융통성 없는 자금 운영으로 기회를 놓칩니다. 돈이 묶여서 흐르지 않는 상태입니다.",
            학업: "공부 방식이 너무 낡았습니다. 효율성이 떨어지니 새로운 학습 도구를 사용해 보세요."
        },
        meanings_en: {
            General: "The most trustworthy and diligent of all knights. Even moving as slowly as a tortoise, success is certain.",
            Love: "A steadfast, unwavering love like a sunflower. The pace may be slow, but it is the safest romance there is.",
            Money: "A stable income arrives steadily and reliably. Conservative, safe investment approaches are always the right answer.",
            Career: "Steady, repetitive study becomes your true ability. The hours spent sitting quietly at your desk are what create success."
        },
        meanings_rev_en: {
            General: "You are refusing change and remaining completely static. An overly conservative attitude is blocking your growth.",
            Love: "The relationship has become too set in its ways and feels utterly dull. Without introducing change, stagnation will set in.",
            Money: "Inflexible asset management causes you to miss key opportunities. Money is frozen solid and refusing to flow.",
            Career: "Your study methods have become outdated. Efficiency is dropping sharply—it is time to adopt new learning tools."
        }
    },
    {
        name: "Queen of Pentacles",
        img: "images/pentacles13.jpg",
        meanings: {
            종합: "현실적이고 자상한 조력자입니다. 당신의 주변을 돌보고 내실을 기할 때입니다.",
            연애: "현모양처 같은 헌신적인 사랑입니다. 상대방을 편안하게 해주는 매력이 돋보입니다.",
            금전: "가계부를 완벽히 관리하며 자산을 불려 나갑니다. 알뜰하게 살림이 피는 운입니다.",
            학업: "차분하고 안정적인 환경에서 성적이 오릅니다. 실용적인 자격증 공부에 좋습니다."
        },
        meanings_rev: {
            종합: "자기 관리에 소홀해지거나 의심이 많아집니다. 주변에 너무 인색하게 굴지 마세요.",
            연애: "질투심이 강해지고 상대를 구속하려 할 수 있습니다. 마음의 너그러움이 필요합니다.",
            금전: "불필요한 쇼핑이나 겉치레로 돈이 샙니다. 관리 부족으로 자산이 줄어들 수 있습니다.",
            학업: "불안한 마음에 공부가 손에 안 잡힙니다. 주변 환경 정리부터 시작하세요."
        },
        meanings_en: {
            General: "A practical and nurturing supporter. It is time to tend to those around you and focus on building real inner substance.",
            Love: "A devoted and homemaking love. Your ability to put your partner completely at ease is your most attractive quality.",
            Money: "You manage every household expense with meticulous precision and grow your assets steadily. Frugal abundance is flourishing.",
            Career: "Grades improve in a calm and stable environment. Practical certification studies are especially well-favored."
        },
        meanings_rev_en: {
            General: "You may be neglecting self-care or becoming overly suspicious and mistrustful. Don't be so stingy with those around you.",
            Love: "Jealousy intensifies and the urge to control your partner grows. Your heart urgently needs to become more generous.",
            Money: "Unnecessary shopping or excessive attention to appearances is draining money. Poor management is causing assets to shrink.",
            Career: "An unsettled state of mind is making it impossible to study. Begin by organizing and tidying your immediate environment."
        }
    },
    {
        name: "King of Pentacles",
        img: "images/pentacles14.jpg",
        meanings: {
            종합: "성공과 부의 상징입니다. 실질적인 권위와 안정을 모두 갖춘 최상의 상태입니다.",
            연애: "듬직하고 경제적으로 능력 있는 파트너와의 사랑입니다. 최고의 안정감을 느낍니다.",
            금전: "사업적 성공과 막대한 이익이 따릅니다. 투자하는 곳마다 결실을 보는 시기입니다.",
            학업: "학업 목표를 완벽히 정복합니다. 경영, 경제, 법학 등 실용 학문에서 최고가 됩니다."
        },
        meanings_rev: {
            종합: "부패하거나 탐욕스러운 태도가 화를 부릅니다. 돈에 눈이 멀어 소중한 걸 잃지 마세요.",
            연애: "사랑을 돈으로 사려 하거나 권위적으로 행동합니다. 상대는 마음을 닫게 됩니다.",
            금전: "무리한 욕심으로 큰 자산을 잃을 수 있습니다. 부정한 거래는 반드시 탄로 납니다.",
            학업: "성적이 잘 나온다고 자만하지 마세요. 실무 능력 없는 지식은 곧 한계를 맞습니다."
        },
        meanings_en: {
            General: "The very symbol of success and wealth. The ultimate state of holding both genuine authority and complete stability.",
            Love: "A love with a reliable, financially capable partner. You experience the deepest possible sense of security.",
            Money: "Remarkable business success and substantial profit follow. Every single investment you make produces a genuine harvest.",
            Career: "You achieve complete mastery over your academic goals. Business, economics, and law—practical disciplines—are your domain."
        },
        meanings_rev_en: {
            General: "A corrupt or greedy attitude will invite disaster. Don't be blinded by money and lose sight of what truly matters.",
            Love: "You may be trying to buy love or acting with unwarranted authority. Your partner's heart will close against you.",
            Money: "Excessive greed may cause the loss of major assets. Dishonest dealings will always come to light in the end.",
            Career: "Do not become complacent just because your grades are good. Knowledge without practical ability will soon hit its limit."
        }
    }
];
