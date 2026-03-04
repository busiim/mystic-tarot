const majorCards = [
    {
        name: "The Fool",
        img: "images/major00.jpg",
        meanings: {
            종합: "새로운 시작과 자유로운 여정을 뜻합니다. 마음이 가는 대로 움직이세요.",
            연애: "풋풋한 설렘이 시작됩니다. 계산하지 않는 순수한 사랑이 찾아올 거예요.",
            금전: "새로운 기회가 오지만, 계획 없는 충동적인 지출은 경계해야 합니다.",
            학업: "새로운 분야에 도전하기 좋은 시기입니다. 창의력이 빛을 발합니다."
        },
        meanings_rev: {
            종합: "무모한 시작은 위험할 수 있습니다. 결정 전 한 번 더 신중하세요.",
            연애: "책임감 없는 태도로 갈등이 생길 수 있습니다. 신뢰를 쌓는 노력이 필요합니다.",
            금전: "충동구매로 잔고가 위태롭습니다. 지갑을 닫고 지출을 점검하세요.",
            학업: "집중력이 산만해져 마무리가 부족합니다. 한 우물을 파는 끈기가 필요합니다."
        },
        meanings_en: {
            General: "A new journey begins with boundless potential. Follow your heart and embrace the adventure ahead.",
            Love: "A fresh, innocent love is blooming. Open your heart without calculation.",
            Money: "New opportunities arise, but avoid impulsive spending without a plan.",
            Career: "An ideal time to explore new fields. Your creativity will shine brightly."
        },
        meanings_rev_en: {
            General: "A reckless start may lead to trouble. Think twice before making decisions.",
            Love: "Irresponsibility may cause conflict. Work on building trust with your partner.",
            Money: "Impulsive purchases are draining your account. Close your wallet and review spending.",
            Career: "Scattered focus is leaving things unfinished. Commit to one path with perseverance."
        }
    },
    {
        name: "The Magician",
        img: "images/major01.jpg",
        meanings: {
            종합: "당신의 재능을 펼칠 기회가 왔습니다. 무엇이든 시작할 준비가 되었습니다.",
            연애: "당신은 매력적입니다. 자신감 있는 태도가 상대방을 사로잡을 것입니다.",
            금전: "아이디어가 곧 돈이 되는 시기입니다. 당신의 기술로 수익을 창출하세요.",
            학업: "이해력이 빠르고 학습 능률이 최고조입니다. 시험에서 좋은 성과를 냅니다."
        },
        meanings_rev: {
            종합: "능력을 잘못된 곳에 쓰고 있지는 않나요? 속임수나 사기를 주의하세요.",
            연애: "말만 앞서고 행동이 따르지 않아 신뢰를 잃을 수 있습니다. 진실함이 답입니다.",
            금전: "화려한 겉모습에 속아 실속 없는 투자를 할 수 있습니다. 내실을 다지세요.",
            학업: "요행을 바라지 마세요. 정석대로 공부해야 결과가 따라옵니다."
        },
        meanings_en: {
            General: "Your talents are ready to be unleashed. You have everything you need to begin.",
            Love: "Your charm is magnetic. Confidence will captivate the one you desire.",
            Money: "Your ideas can generate income now. Use your skills to create real profit.",
            Career: "Your mental clarity is at its peak. Expect excellent results on exams or projects."
        },
        meanings_rev_en: {
            General: "Are you misusing your abilities? Beware of deception or being deceived.",
            Love: "Words without action erode trust. Sincerity is the only answer.",
            Money: "Flashy appearances may hide empty returns. Focus on substance over show.",
            Career: "Don't rely on shortcuts. Solid, consistent effort is the only way to results."
        }
    },
    {
        name: "The High Priestess",
        img: "images/major02.jpg",
        meanings: {
            종합: "내면의 목소리에 귀를 기울이세요. 직관이 당신의 가장 좋은 가이드입니다.",
            연애: "정신적인 교감이 중요한 시기입니다. 지금은 조용히 지켜보는 것이 좋습니다.",
            금전: "자금 관리에 지혜가 필요한 때입니다. 아직은 큰 투자를 할 시기가 아닙니다.",
            학업: "깊이 있는 연구나 인문학 학습에 아주 길합니다. 조용한 공부 환경이 필요합니다."
        },
        meanings_rev: {
            종합: "생각이 너무 많아 결정 장애가 올 수 있습니다. 비밀이 드러날까 불안할 수 있습니다.",
            연애: "상대에게 너무 차갑게 대하고 있지는 않나요? 마음을 열고 소통하세요.",
            금전: "보이지 않는 곳에서 돈이 새어 나가고 있습니다. 서류와 계약을 재확인하세요.",
            학업: "이론에만 매몰되어 실천력이 부족합니다. 배운 것을 실제로 적용해 보세요."
        },
        meanings_en: {
            General: "Listen to your inner voice. Your intuition is your greatest guide right now.",
            Love: "Spiritual and emotional connection matters most. Observe quietly for now.",
            Money: "Wisdom in financial management is needed. This is not the time for big investments.",
            Career: "Deep research and study are highly favored. A quiet environment will help you focus."
        },
        meanings_rev_en: {
            General: "Overthinking may lead to decision paralysis. Secrets may come to light.",
            Love: "Are you being too cold or distant? Open your heart and communicate more.",
            Money: "Money is leaking from unseen places. Re-check documents and contracts carefully.",
            Career: "Too much theory, not enough practice. Apply what you have learned in real situations."
        }
    },
    {
        name: "The Empress",
        img: "images/major03.jpg",
        meanings: {
            종합: "풍요와 결실의 시기입니다. 당신의 노력이 드디어 보상을 받게 됩니다.",
            연애: "따뜻하고 헌신적인 사랑입니다. 관계가 안정되고 풍성해지는 시기입니다.",
            금전: "재물운이 매우 좋습니다. 예상치 못한 이익이나 풍족함을 누리게 됩니다.",
            학업: "창의적인 예술이나 실기 분야에서 성과가 좋습니다. 마음을 편히 가지세요."
        },
        meanings_rev: {
            종합: "지나친 욕심이나 나태함이 화를 부를 수 있습니다. 감정을 조절하세요.",
            연애: "너무 집착하거나 요구하는 것이 많지는 않은지 돌아보세요. 권태기를 주의하세요.",
            금전: "겉치레를 위해 큰돈을 쓰는 것을 자제하세요. 낭비벽이 생길 수 있습니다.",
            학업: "게으름으로 인해 계획이 미뤄집니다. 기초부터 다시 다질 필요가 있습니다."
        },
        meanings_en: {
            General: "A time of abundance and fruition. Your efforts are finally being rewarded.",
            Love: "A warm and devoted love surrounds you. Your relationship grows richer and more stable.",
            Money: "Financial luck is very strong. Unexpected gains and prosperity are on their way.",
            Career: "Creative and artistic endeavors flourish. Keep a peaceful mindset and trust the process."
        },
        meanings_rev_en: {
            General: "Greed or laziness could cause problems. Learn to manage your emotions.",
            Love: "Are you being too possessive or demanding? Watch out for complacency in the relationship.",
            Money: "Avoid spending large sums on appearances. A tendency toward wastefulness is rising.",
            Career: "Procrastination is delaying your plans. Rebuild your foundation from the basics up."
        }
    },
    {
        name: "The Emperor",
        img: "images/major04.jpg",
        meanings: {
            종합: "강력한 리더십이 생깁니다. 계획대로 밀고 나간다면 반드시 성공합니다.",
            연애: "책임감 있고 듬직한 사랑을 하게 됩니다. 주도적인 연애를 할 시기입니다.",
            금전: "재산의 기반이 탄탄해집니다. 장기적인 자산 관리에 유리한 운세입니다.",
            학업: "철저한 계획과 절제력이 필요합니다. 당신의 의지가 목표를 이룹니다."
        },
        meanings_rev: {
            종합: "독선적인 태도로 마찰이 생길 수 있습니다. 융통성을 발휘하세요.",
            연애: "상대를 통제하려다 다툼이 생깁니다. 고집을 꺾고 부드럽게 대화하세요.",
            금전: "무리한 투자는 독이 됩니다. 권위 실추나 손실을 조심해야 합니다.",
            학업: "과도한 압박감에 능률이 떨어집니다. 스스로를 너무 몰아세우지 마세요."
        },
        meanings_en: {
            General: "Strong leadership energy is with you. Push forward with your plans and success will follow.",
            Love: "A responsible, dependable love is forming. You are ready to take the lead in romance.",
            Money: "Your financial foundation is becoming solid. Long-term wealth management looks favorable.",
            Career: "Discipline and a firm plan are essential. Your willpower will achieve your goals."
        },
        meanings_rev_en: {
            General: "Stubbornness may create friction. Flexibility is needed now.",
            Love: "Trying to control your partner will cause arguments. Soften your approach in conversation.",
            Money: "Overextending with risky investments could backfire. Watch for financial losses.",
            Career: "Excessive pressure is killing your productivity. Stop pushing yourself so hard."
        }
    },
    {
        name: "The Hierophant",
        img: "images/major05.jpg",
        meanings: {
            종합: "멘토의 조언을 구하세요. 전통적인 방식과 신뢰 관계가 중요합니다.",
            연애: "안정적이고 도덕적인 인연을 맺습니다. 정신적 지지가 큰 힘이 됩니다.",
            금전: "보수적인 자산 운용이 필요합니다. 전문가의 도움으로 이득을 봅니다.",
            학업: "스승이나 선배의 지도가 큰 도움이 됩니다. 정규 교육 과정에 충실하세요."
        },
        meanings_rev: {
            종합: "잘못된 조언을 듣거나 고정관념에 갇힐 수 있습니다. 시야를 넓히세요.",
            연애: "주변의 지나친 간섭이 방해가 됩니다. 두 사람만의 원칙을 세우세요.",
            금전: "보증이나 잘못된 계약에 휘말릴 수 있습니다. 원칙을 벗어나지 마세요.",
            학업: "공부 방식에 의구심이 생깁니다. 독단보다는 검증된 방법을 찾으세요."
        },
        meanings_en: {
            General: "Seek the guidance of a mentor. Traditional methods and trusted relationships matter.",
            Love: "A stable, morally grounded relationship forms. Spiritual support strengthens the bond.",
            Money: "Conservative asset management is wise. A professional advisor will bring gains.",
            Career: "A teacher or senior's guidance is invaluable. Stay committed to the formal learning path."
        },
        meanings_rev_en: {
            General: "Misleading advice or rigid thinking may hold you back. Broaden your perspective.",
            Love: "Outside interference is causing problems. Establish boundaries as a couple.",
            Money: "You may be drawn into flawed contracts or guarantees. Don't stray from sound principles.",
            Career: "You're questioning your study methods. Seek proven approaches rather than acting alone."
        }
    },
    {
        name: "The Lovers",
        img: "images/major06.jpg",
        meanings: {
            종합: "중요한 선택의 순간입니다. 당신의 마음이 이끄는 결정을 내리세요.",
            연애: "강렬한 사랑의 결합입니다. 서로에게 깊이 빠져드는 행복한 시기입니다.",
            금전: "동업이나 협력이 금전적 이득으로 이어집니다. 조화가 핵심입니다.",
            학업: "흥미를 느끼는 과목에서 큰 진전이 있습니다. 선택과 집중이 필요합니다."
        },
        meanings_rev: {
            종합: "잘못된 선택이나 관계의 불협화음을 경계하세요. 신중함이 필요합니다.",
            연애: "소통 부재나 삼각관계로 갈등이 생길 수 있습니다. 진심을 나누세요.",
            금전: "유혹에 의한 충동적 지출을 주의하세요. 계약은 미루는 것이 좋습니다.",
            학업: "공부 외적인 유혹에 빠지기 쉽습니다. 집중력을 회복해야 합니다."
        },
        meanings_en: {
            General: "A pivotal choice lies before you. Let your heart guide your decision.",
            Love: "A deeply passionate union is forming. This is a blissful time of mutual attraction.",
            Money: "Partnership or collaboration leads to financial gain. Harmony is the key.",
            Career: "Great progress comes in subjects you're passionate about. Choose wisely and focus."
        },
        meanings_rev_en: {
            General: "A poor choice or relational discord looms. Proceed with caution.",
            Love: "Miscommunication or a love triangle may cause conflict. Share your true feelings.",
            Money: "Temptation-driven impulsive spending should be avoided. Delay major contracts for now.",
            Career: "External temptations are pulling you away from study. Reclaim your focus."
        }
    },
    {
        name: "The Chariot",
        img: "images/major07.jpg",
        meanings: {
            종합: "승리를 향한 거침없는 전진입니다. 강력한 추진력이 승리를 가져옵니다.",
            연애: "자신감 있게 대시하세요. 당신의 적극적인 태도가 사랑을 쟁취합니다.",
            금전: "성과가 빠르게 나타나는 시기입니다. 추진 중인 일이 수익을 냅니다.",
            학업: "목표를 향해 돌진하세요. 단기간 집중력이 매우 좋아져 성과를 냅니다."
        },
        meanings_rev: {
            종합: "방향을 잃거나 감정 조절 실패로 실수를 할 수 있습니다. 침착하세요.",
            연애: "일방적인 고집은 상대를 지치게 합니다. 연애의 속도를 조절하세요.",
            금전: "성급한 움직임이 화가 됩니다. 계획 없는 투자는 절대로 금물입니다.",
            학업: "의욕만 앞서고 마무리가 부족합니다. 체력 안배와 체계가 필요합니다."
        },
        meanings_en: {
            General: "An unstoppable advance toward victory. Powerful momentum will bring success.",
            Love: "Be bold and take initiative. Your confidence will win the heart you desire.",
            Money: "Results are coming quickly. Projects in motion will soon generate income.",
            Career: "Charge toward your goal. Your intense focus will produce outstanding results."
        },
        meanings_rev_en: {
            General: "Loss of direction or poor emotional control may cause mistakes. Stay calm.",
            Love: "Pushing too hard in one direction will exhaust your partner. Adjust the pace.",
            Money: "Hasty moves will backfire. Never invest without a solid plan.",
            Career: "Enthusiasm without follow-through falls short. Balance energy and strategy."
        }
    },
    {
        name: "Strength",
        img: "images/major08.jpg",
        meanings: {
            종합: "부드러운 카리스마가 힘을 발휘합니다. 인내와 포용력이 승리의 열쇠입니다.",
            연애: "상대를 다독이는 깊은 사랑입니다. 인내심이 신뢰를 더욱 두텁게 합니다.",
            금전: "지출을 통제하는 능력이 좋습니다. 장기적인 관점에서 자산이 늘어납니다.",
            학업: "어려운 과제도 끈기로 이겨냅니다. 꾸준함이 결국 좋은 성적을 만듭니다."
        },
        meanings_rev: {
            종합: "자신감을 잃거나 힘에 부칠 수 있습니다. 잠시 쉬어가며 에너지를 충전하세요.",
            연애: "자존심 싸움으로 관계가 위태롭습니다. 상대에게 조금 더 부드러워지세요.",
            금전: "충동을 억제하지 못해 과소비를 할 수 있습니다. 절제가 필요한 시점입니다.",
            학업: "슬럼프에 빠지기 쉽습니다. 자신을 믿고 다시 시작하는 용기가 중요합니다."
        },
        meanings_en: {
            General: "Gentle charisma and quiet power prevail. Patience and compassion are your keys to victory.",
            Love: "A deep, nurturing love supports your partner. Your patience builds lasting trust.",
            Money: "Your ability to control spending is excellent. Wealth grows from a long-term perspective.",
            Career: "Even difficult challenges yield to persistence. Consistent effort will produce great grades."
        },
        meanings_rev_en: {
            General: "You may feel a loss of confidence or be overwhelmed. Rest and recharge your energy.",
            Love: "A battle of egos is threatening the relationship. Try to be gentler with your partner.",
            Money: "Inability to restrain impulses may lead to overspending. Discipline is urgently needed.",
            Career: "A slump may hit hard. Believe in yourself and find the courage to start again."
        }
    },
    {
        name: "The Hermit",
        img: "images/major09.jpg",
        meanings: {
            종합: "내면 성찰이 필요한 시기입니다. 혼자만의 시간 속에서 답을 찾게 됩니다.",
            연애: "신중한 접근이 필요한 때입니다. 진지하게 관계의 미래를 생각하세요.",
            금전: "욕심내기보다 현재를 유지하세요. 조용히 미래를 설계할 최적의 시기입니다.",
            학업: "혼자 공부할 때 효율이 가장 높습니다. 깊이 있는 탐구에 몰입해 보세요."
        },
        meanings_rev: {
            종합: "세상과 너무 단절되어 고립감을 느낄 수 있습니다. 적당한 소통이 필요합니다.",
            연애: "너무 따지고 재고 있지는 않나요? 마음의 문을 조금 더 열어보세요.",
            금전: "지나치게 인색해져 주위의 인심을 잃을 수 있습니다. 베풂도 필요합니다.",
            학업: "좁은 시야에 갇혀 핵심을 놓치고 있습니다. 주변의 의견도 참고하세요."
        },
        meanings_en: {
            General: "A time for inner reflection. Answers will come through solitude and contemplation.",
            Love: "A cautious approach is needed now. Take time to seriously consider the future of the relationship.",
            Money: "Maintain what you have rather than chasing more. This is the best time to quietly plan ahead.",
            Career: "Solo study is most effective right now. Immerse yourself in deep, focused research."
        },
        meanings_rev_en: {
            General: "Too much isolation may lead to loneliness. Some connection and communication is necessary.",
            Love: "Are you overthinking everything? Open your heart a little more.",
            Money: "Excessive stinginess may cost you goodwill. Generosity has its own rewards.",
            Career: "A narrow perspective is causing you to miss the key point. Consider outside opinions."
        }
    },
    {
        name: "Wheel of Fortune",
        img: "images/major10.jpg",
        meanings: {
            종합: "거스를 수 없는 변화의 흐름이 옵니다. 행운의 기회를 놓치지 마세요.",
            연애: "운명적인 만남이 예상됩니다. 관계가 급격히 진전되는 기분 좋은 시기입니다.",
            금전: "예상치 못한 횡재수나 상황 반전으로 금전적인 문제가 해결됩니다.",
            학업: "노력 이상의 결과가 따르는 운 좋은 시기입니다. 이 흐름을 타세요."
        },
        meanings_rev: {
            종합: "상황이 생각지 못한 방향으로 흐릅니다. 인내하며 다음 기회를 기다리세요.",
            연애: "타이밍이 맞지 않아 엇갈릴 수 있습니다. 서두른다고 해결되지 않습니다.",
            금전: "갑작스러운 지출이나 수입 감소에 대비하세요. 비상금이 필요합니다.",
            학업: "운에 기대지 말고 실력을 쌓으세요. 성적의 기복이 심해질 수 있습니다."
        },
        meanings_en: {
            General: "An unstoppable wave of change is coming. Don't miss the opportunity that fortune brings.",
            Love: "A fateful meeting is on the horizon. A relationship is about to accelerate wonderfully.",
            Money: "An unexpected windfall or reversal of fortune is resolving financial concerns.",
            Career: "Lucky results that exceed your effort are coming. Ride this positive wave."
        },
        meanings_rev_en: {
            General: "Events are flowing in an unexpected direction. Be patient and wait for the next opening.",
            Love: "Timing is off and you may keep missing each other. Rushing won't solve anything.",
            Money: "Brace for sudden expenses or a dip in income. An emergency fund is essential.",
            Career: "Don't rely on luck; build genuine skill. Performance may become erratic."
        }
    },
    {
        name: "Justice",
        img: "images/major11.jpg",
        meanings: {
            종합: "공정하고 냉철한 판단이 필요합니다. 뿌린 대로 거두는 시기입니다.",
            연애: "서로에 대한 균형과 예의가 중요합니다. 합리적인 대화로 문제를 푸세요.",
            금전: "계약이나 서류 운이 좋습니다. 빌려준 돈을 받거나 정당한 보상을 받습니다.",
            학업: "공부한 만큼 정직하게 결과가 나옵니다. 요행은 통하지 않는 시기입니다."
        },
        meanings_rev: {
            종합: "불공평한 대우를 받거나 편견에 치우칠 수 있습니다. 중립을 유지하세요.",
            연애: "너무 따지는 태도가 상처를 줄 수 있습니다. 상대의 감정도 고려하세요.",
            금전: "법적 문제나 금전적 불이익을 조심하세요. 계산을 철저히 해야 합니다.",
            학업: "노력에 비해 아쉬운 결과가 나올 수 있습니다. 부족한 부분을 분석하세요."
        },
        meanings_en: {
            General: "Clear, impartial judgment is required. You will reap exactly what you have sown.",
            Love: "Balance and respect are essential to the relationship. Resolve issues through rational dialogue.",
            Money: "Contracts and legal documents are favorable. Money owed to you will be returned.",
            Career: "Your results will honestly reflect your efforts. There's no room for shortcuts here."
        },
        meanings_rev_en: {
            General: "Unfair treatment or biased thinking may arise. Strive to remain neutral.",
            Love: "Being overly critical may cause emotional harm. Consider your partner's feelings.",
            Money: "Legal issues or financial penalties may arise. Double-check all calculations.",
            Career: "Results may fall short of expectations. Analyze what is lacking and adjust."
        }
    },
    {
        name: "The Hanged Man",
        img: "images/major12.jpg",
        meanings: {
            종합: "새로운 관점이 필요합니다. 지금의 인내가 훗날 큰 보답으로 돌아옵니다.",
            연애: "헌신적인 태도가 관계를 지킵니다. 지금은 조금 더 기다려줄 때입니다.",
            금전: "자금이 묶여 답답할 수 있으나, 더 큰 이익을 위한 일시적 정체입니다.",
            학업: "관점을 바꿔 공부하면 막혔던 부분이 풀립니다. 서두르지 마세요."
        },
        meanings_rev: {
            종합: "헛된 희생을 하고 있지는 않나요? 무의미한 고집은 버려야 합니다.",
            연애: "보답 없는 사랑에 지칠 수 있습니다. 자신의 가치를 먼저 소중히 하세요.",
            금전: "손해 보는 투자를 억지로 끌고 가고 있습니다. 결단력이 필요한 시점입니다.",
            학업: "노력의 방향이 잘못되었습니다. 무작정 공부하기보다 전략을 바꾸세요."
        },
        meanings_en: {
            General: "A new perspective is needed. The patience you show now will be richly rewarded later.",
            Love: "A spirit of sacrifice sustains the relationship. Now is the time to be a little more patient.",
            Money: "Funds may feel tied up, but this is a temporary pause that leads to greater gain.",
            Career: "Approaching your studies from a different angle will unlock what was blocking you. Don't rush."
        },
        meanings_rev_en: {
            General: "Are you making pointless sacrifices? Let go of stubborn attachments that serve no purpose.",
            Love: "Giving without receiving is exhausting you. Value yourself before sacrificing for others.",
            Money: "You're forcing a losing investment to continue. This is the moment for a decisive cut.",
            Career: "Your study direction is wrong. Instead of grinding blindly, change your strategy."
        }
    },
    {
        name: "Death",
        img: "images/major13.jpg",
        meanings: {
            종합: "과거가 끝나고 새로운 장이 열립니다. 변화를 겸허히 받아들이세요.",
            연애: "이별이나 큰 관계의 변화를 뜻하지만, 이는 새로운 인연을 위한 시작입니다.",
            금전: "과감한 구조조정이 필요합니다. 불필요한 고정 지출을 완전히 끊으세요.",
            학업: "기존 공부 방식을 버리고 완전히 새롭게 시작하세요. 재출발에 길합니다."
        },
        meanings_rev: {
            종합: "변화를 거부하고 미련에 빠져 있습니다. 정체를 벗어나야 합니다.",
            연애: "이미 끝난 관계를 붙잡고 있을 수 있습니다. 마음 정리가 필요합니다.",
            금전: "위험 신호를 무시하고 있습니다. 큰 손해 전에 손절을 결정해야 합니다.",
            학업: "나쁜 습관을 버리지 못해 성적이 오르지 않습니다. 과감히 변해야 합니다."
        },
        meanings_en: {
            General: "The old chapter closes as a new one begins. Accept transformation with an open heart.",
            Love: "An ending or major shift in a relationship marks the beginning of a new connection.",
            Money: "A bold restructuring is needed. Cut unnecessary fixed expenses completely.",
            Career: "Abandon your old study methods and start completely fresh. A new beginning awaits."
        },
        meanings_rev_en: {
            General: "You are resisting change and clinging to the past. You must break free from stagnation.",
            Love: "You may be holding on to a relationship that has already ended. Closure is needed.",
            Money: "You're ignoring warning signs. Decide to cut losses before a bigger disaster strikes.",
            Career: "Bad habits are preventing improvement. Radical change is necessary now."
        }
    },
    {
        name: "Temperance",
        img: "images/major14.jpg",
        meanings: {
            종합: "조화와 절제가 성공의 열쇠입니다. 극단을 피해 중도를 유지하세요.",
            연애: "안정적이고 평온한 소통이 이어집니다. 서로 맞춰가는 과정이 즐겁습니다.",
            금전: "수입과 지출의 균형이 아주 좋습니다. 무리 없는 자금 흐름이 지속됩니다.",
            학업: "여러 과목을 균형 있게 학습하세요. 컨디션 관리가 곧 실력입니다."
        },
        meanings_rev: {
            종합: "감정 조절이 어렵고 생활 리듬이 깨지기 쉽습니다. 절제가 최우선입니다.",
            연애: "의사소통이 삐걱거립니다. 서로의 차이를 인정하려는 노력이 부족합니다.",
            금전: "지출 조절에 실패해 자금 회전이 어렵습니다. 낭비를 경계하세요.",
            학업: "학습 계획이 엉망이 되기 쉽습니다. 다시 규칙적인 생활로 돌아오세요."
        },
        meanings_en: {
            General: "Harmony and moderation are the keys to success. Avoid extremes and maintain balance.",
            Love: "Calm and stable communication continues. The process of adjusting to each other is joyful.",
            Money: "Income and expenses are in excellent balance. A smooth, sustainable financial flow continues.",
            Career: "Study each subject proportionately. Managing your wellbeing is itself a form of skill."
        },
        meanings_rev_en: {
            General: "Emotional regulation is difficult and your life rhythm is breaking down. Restraint is the priority.",
            Love: "Communication is faltering. There is not enough effort to accept each other's differences.",
            Money: "Failure to control spending is making cash flow difficult. Guard against wastefulness.",
            Career: "Your study schedule is falling apart. Return to a regular, disciplined routine."
        }
    },
    {
        name: "The Devil",
        img: "images/major15.jpg",
        meanings: {
            종합: "강한 유혹이나 집착에 주의하세요. 속박에서 벗어날 용기가 필요합니다.",
            연애: "치명적인 매력이지만 위험합니다. 집착이나 중독적인 사랑을 조심하세요.",
            금전: "단기 이익이나 투기적 유혹에 빠지기 쉽습니다. 빚은 절대로 안 됩니다.",
            학업: "오락이나 스마트폰 등 유혹에 취약합니다. 학습 환경을 완전히 격리하세요."
        },
        meanings_rev: {
            종합: "나쁜 습관이나 관계에서 벗어나기 시작합니다. 자유를 되찾는 기운입니다.",
            연애: "과거의 집착을 끊어냅니다. 이제야 진정으로 건강한 자신을 만납니다.",
            금전: "금전적 압박에서 서서히 탈출합니다. 현실적인 경제 관념이 돌아옵니다.",
            학업: "방황을 끝내고 다시 책상에 앉습니다. 스스로를 이겨낼 힘이 생깁니다."
        },
        meanings_en: {
            General: "Beware of strong temptations or obsessions. You need the courage to break free from what binds you.",
            Love: "Dangerously magnetic, but risky. Beware of obsessive or addictive patterns in love.",
            Money: "Short-term gains and speculative temptations are hard to resist. Never go into debt.",
            Career: "You're vulnerable to distractions like gaming or social media. Create a focused study environment."
        },
        meanings_rev_en: {
            General: "You are beginning to break free from bad habits or toxic relationships. Freedom is returning.",
            Love: "You are cutting ties with past obsessions. You are finally meeting a healthier version of yourself.",
            Money: "You are slowly escaping financial pressure. A realistic sense of money management is returning.",
            Career: "Your wandering is ending as you return to your desk. The strength to overcome yourself is growing."
        }
    },
    {
        name: "The Tower",
        img: "images/major16.jpg",
        meanings: {
            종합: "갑작스러운 변화가 닥칠 수 있습니다. 이는 더 나은 구축을 위한 파괴입니다.",
            연애: "숨겨온 갈등이 폭발할 수 있습니다. 진실을 마주해야 관계가 새로워집니다.",
            금전: "금전적 사고에 대비해 자금을 확보하세요. 안전한 자산 관리가 제일입니다.",
            학업: "시험 결과가 충격적일 수 있으나, 당신의 약점을 정확히 파악하게 됩니다."
        },
        meanings_rev: {
            종합: "큰 재난을 간신히 피하거나 혼란이 서서히 진정되어 갑니다.",
            연애: "이별 위기를 가까스로 넘깁니다. 근본적인 원인을 해결하려 노력하세요.",
            금전: "큰 고비는 넘겼으나 여전히 불안합니다. 한동안은 지출을 극도로 줄이세요.",
            학업: "공부 능률이 최악인 시기입니다. 억지로 하기보다 멘탈부터 챙기세요."
        },
        meanings_en: {
            General: "A sudden disruption may strike. This destruction paves the way for something better to be built.",
            Love: "Hidden tensions may erupt. Facing the truth honestly will renew the relationship.",
            Money: "Secure your funds as a safeguard against financial shocks. Safe asset management comes first.",
            Career: "Test results may be shocking, but they will reveal your exact weaknesses for targeted improvement."
        },
        meanings_rev_en: {
            General: "A major crisis is narrowly averted, or the turmoil is slowly calming down.",
            Love: "A breakup crisis is barely survived. Work to resolve the root causes of the conflict.",
            Money: "The worst is over, but uncertainty remains. Drastically reduce spending for the near future.",
            Career: "Study efficiency is at its worst. Rather than forcing it, attend to your mental state first."
        }
    },
    {
        name: "The Star",
        img: "images/major17.jpg",
        meanings: {
            종합: "희망과 영감이 가득한 시기입니다. 당신의 꿈이 실현될 가능성이 큽니다.",
            연애: "이상적인 상대를 만나거나 관계에 축복이 따르는 로맨틱한 날입니다.",
            금전: "상황이 서서히 호전됩니다. 장기적인 투자가 미래에 큰 빛을 발합니다.",
            학업: "목표가 명확해지고 숨겨진 재능을 발견합니다. 예술적 감각이 좋습니다."
        },
        meanings_rev: {
            종합: "현실감 없는 이상만 쫓고 있지는 않나요? 실망감에 주의해야 합니다.",
            연애: "상대에게 너무 큰 기대를 걸어 실망할 수 있습니다. 있는 그대로를 보세요.",
            금전: "기대에 못 미치는 수입에 허탈할 수 있습니다. 지출 계획을 현실화하세요.",
            학업: "목표가 너무 높아 금방 지칩니다. 작은 성공부터 차근차근 맛보세요."
        },
        meanings_en: {
            General: "A period of hope and inspiration. The chances of your dream becoming reality are very high.",
            Love: "You meet your ideal partner, or your existing relationship receives a wonderful blessing.",
            Money: "Conditions are gradually improving. Long-term investments will shine brightly in the future.",
            Career: "Your goals become clear and a hidden talent is discovered. Artistic sensitivity is heightened."
        },
        meanings_rev_en: {
            General: "Are you chasing unrealistic ideals? Be careful of potential disappointment.",
            Love: "You may be placing too high expectations on your partner and end up let down. See them as they are.",
            Money: "Income falling short of expectations may feel deflating. Make your spending plan more realistic.",
            Career: "Goals set too high will lead to burnout quickly. Build confidence through small wins first."
        }
    },
    {
        name: "The Moon",
        img: "images/major18.jpg",
        meanings: {
            종합: "혼란스럽고 불안한 시기입니다. 겉모습에 속지 말고 진실을 보세요.",
            연애: "서로에 대한 비밀이나 의심이 생길 수 있습니다. 직관을 따르세요.",
            금전: "사기나 속임수를 경계하세요. 지금은 투자하기에 불확실성이 너무 큽니다.",
            학업: "집중이 안 되고 막막한 기분이 듭니다. 멘탈 관리가 무엇보다 중요합니다."
        },
        meanings_rev: {
            종합: "오해가 풀리고 불안감이 사라집니다. 이제야 진실이 보이기 시작합니다.",
            연애: "불안했던 관계에 확신이 생깁니다. 오해를 풀 좋은 타이밍입니다.",
            금전: "불투명한 자금 흐름이 명확해집니다. 속았던 사실을 알아차리게 됩니다.",
            학업: "공부의 방향을 잡기 시작합니다. 막막함이 걷히고 방법이 보입니다."
        },
        meanings_en: {
            General: "A time of confusion and anxiety. Don't be deceived by appearances; seek the truth beneath.",
            Love: "Secrets or suspicions may arise between you. Trust your intuition in this situation.",
            Money: "Guard against fraud and deception. The uncertainty is too great for investing right now.",
            Career: "Concentration is breaking down and everything feels overwhelming. Mental management is paramount."
        },
        meanings_rev_en: {
            General: "Misunderstandings are clearing and anxiety is fading. The truth is beginning to emerge.",
            Love: "Clarity is returning to an uncertain relationship. This is a good time to resolve misunderstandings.",
            Money: "A murky financial picture is becoming clear. You may discover you have been deceived.",
            Career: "You're beginning to find direction in your studies. The fog is lifting and a path is visible."
        }
    },
    {
        name: "The Sun",
        img: "images/major19.jpg",
        meanings: {
            종합: "최고의 행운과 성공이 함께합니다. 당신의 앞날은 매우 밝습니다.",
            연애: "모두에게 축복받는 연애입니다. 순수한 에너지가 관계를 채워줍니다.",
            금전: "재물운이 활짝 열립니다. 보너스나 뜻밖의 수익으로 여유로워집니다.",
            학업: "자신감이 넘치고 성과가 훌륭합니다. 합격의 기쁨이 기다리고 있습니다."
        },
        meanings_rev: {
            종합: "일시적인 지체일 뿐입니다. 자만심만 경계한다면 여전히 운은 좋습니다.",
            연애: "작은 다툼이 생길 수 있으나 곧 회복됩니다. 너무 들뜨지 않도록 주의하세요.",
            금전: "수익은 있으나 관리에 소홀해 돈이 새 나갑니다. 꼼꼼히 챙기세요.",
            학업: "성적이 오르지만 방심은 금물입니다. 자만하지 말고 페이스를 유지하세요."
        },
        meanings_en: {
            General: "The greatest luck and success shine upon you. Your future is brilliantly bright.",
            Love: "A love that everyone celebrates and blesses is yours. Pure, joyful energy fills the relationship.",
            Money: "Financial fortune opens wide. A bonus or unexpected income brings comfortable abundance.",
            Career: "Confidence soars and achievements are outstanding. The joy of success is waiting for you."
        },
        meanings_rev_en: {
            General: "Only a temporary delay. As long as you guard against arrogance, your luck remains strong.",
            Love: "A minor disagreement may arise, but it will heal quickly. Try not to get too carried away.",
            Money: "Income is present, but careless management lets money slip away. Be more diligent.",
            Career: "Grades are improving, but complacency is dangerous. Stay humble and maintain your pace."
        }
    },
    {
        name: "Judgement",
        img: "images/major20.jpg",
        meanings: {
            종합: "결정적인 소식이 들려옵니다. 새로운 기회를 잡고 화려하게 부활하세요.",
            연애: "재회 운이 강하거나 중요한 결단을 내릴 때입니다. 진실한 대화가 답입니다.",
            금전: "투자했던 돈을 회수하거나 계약 체결 소식이 들립니다. 상황이 풀립니다.",
            학업: "노력의 결실을 봅니다. 합격이나 좋은 성적표를 받게 될 운입니다."
        },
        meanings_rev: {
            종합: "기회를 놓치거나 결정을 미루고 있습니다. 뒤늦은 후회를 조심하세요.",
            연애: "과거에 얽매여 나아가지 못합니다. 재회에 대한 미련을 이제는 버리세요.",
            금전: "과거의 채무 문제로 답답해질 수 있습니다. 빨리 정산하고 넘어가야 합니다.",
            학업: "결과가 기대에 못 미쳐 실망할 수 있습니다. 다시 도전할 준비가 필요합니다."
        },
        meanings_en: {
            General: "A decisive announcement is coming. Seize the new opportunity and make a glorious comeback.",
            Love: "A reunion is strongly favored, or a crucial decision must be made. Honest conversation is the answer.",
            Money: "Money previously invested is returned, or a contract is finalized. The situation resolves itself.",
            Career: "The fruits of your effort arrive. An acceptance letter or excellent results are in your near future."
        },
        meanings_rev_en: {
            General: "You are missing opportunities or postponing decisions. Beware of regret arriving too late.",
            Love: "You are trapped in the past and cannot move forward. Let go of the longing for reconciliation.",
            Money: "Old debt issues may become frustrating. Settle accounts quickly and move on.",
            Career: "Results may fall short of hope, leaving you disappointed. Prepare to try again."
        }
    },
    {
        name: "The World",
        img: "images/major21.jpg",
        meanings: {
            종합: "완성과 통합의 단계입니다. 당신의 목표가 완벽하게 이루어집니다.",
            연애: "행복의 정점에 도달합니다. 결혼이나 결실을 보기에 최고의 시기입니다.",
            금전: "금전적으로 최고로 안정된 상태입니다. 노력이 큰 부로 돌아옵니다.",
            학업: "목표한 모든 것을 이룹니다. 유학이나 해외 관련 공부에도 아주 길합니다."
        },
        meanings_rev: {
            종합: "완성 직전에 멈춰있습니다. 조금만 더 노력하면 결승선에 도달합니다.",
            연애: "완벽을 추구하다 보니 오히려 관계가 정체됩니다. 마음을 편히 가지세요.",
            금전: "자금 흐름이 90% 정도만 만족스럽습니다. 마지막 마무리에 집중하세요.",
            학업: "거의 다 왔습니다. 슬럼프를 이겨내고 마지막 한 걸음을 더 내딛으세요."
        },
        meanings_en: {
            General: "The stage of completion and integration. Your goals are achieved with absolute perfection.",
            Love: "You reach the peak of happiness. This is the finest time for marriage or a major milestone.",
            Money: "You are at the most financially stable point. Your hard work returns as great abundance.",
            Career: "Every goal you set is accomplished. Study related to overseas or international topics is especially favored."
        },
        meanings_rev_en: {
            General: "You have paused just before the finish line. A little more effort will bring you to completion.",
            Love: "Pursuit of perfection is actually stalling the relationship. Allow yourself to be at ease.",
            Money: "Cash flow is about 90% satisfying. Focus on completing the final details.",
            Career: "You're almost there. Overcome the final slump and take one more step forward."
        }
    }
];
