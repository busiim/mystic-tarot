const swordCards = [
    {
        name: "Ace of Swords",
        img: "images/swords01.jpg",
        meanings: {
            종합: "명확한 판단과 새로운 결단이 필요한 때입니다. 승리의 기회가 찾아옵니다.",
            연애: "이성적인 판단으로 관계의 돌파구를 찾습니다. 솔직한 대화가 필요한 시기입니다.",
            금전: "확실한 투자 결정이나 계약을 맺기에 좋습니다. 냉철한 계산이 이득을 부릅니다.",
            학업: "집중력이 최고조에 달합니다. 어려운 난제를 해결하고 성적이 급상승할 운입니다."
        },
        meanings_rev: {
            종합: "판단력이 흐려져 혼란에 빠질 수 있습니다. 무리한 결정은 화를 부릅니다.",
            연애: "말실수로 상처를 주거나 오해가 생길 수 있습니다. 감정적인 언행을 자제하세요.",
            금전: "불리한 계약에 서명할 위험이 있습니다. 서류의 세부 조항을 꼼꼼히 확인하세요.",
            학업: "생각이 꼬여 공부 효율이 떨어집니다. 기초부터 차근차근 다시 정리해야 합니다."
        },
        meanings_en: {
            General: "Clear judgment and a decisive new beginning are called for. A chance at victory has arrived.",
            Love: "Rational thinking helps you find a breakthrough in the relationship. Honest conversation is now essential.",
            Money: "An excellent time to make a firm investment decision or sign a contract. Clear thinking brings gains.",
            Career: "Your concentration is at its absolute peak. Expect a sharp rise in performance and grades."
        },
        meanings_rev_en: {
            General: "Clouded judgment may lead to confusion. Rash decisions invite trouble.",
            Love: "A slip of the tongue or misunderstanding may cause hurt. Restrain emotional outbursts.",
            Money: "You risk signing an unfavorable contract. Scrutinize every clause in every document.",
            Career: "Tangled thinking is reducing study efficiency. Return to the basics and rebuild step by step."
        }
    },
    {
        name: "Two of Swords",
        img: "images/swords02.jpg",
        meanings: {
            종합: "팽팽한 긴장감 속에 선택의 기로에 서 있습니다. 균형을 잡고 내면을 들여다보세요.",
            연애: "마음을 정하지 못하고 갈등하는 시기입니다. 지금은 결정을 미루는 것도 방법입니다.",
            금전: "수입과 지출 사이에서 아슬아슬한 균형을 유지합니다. 신중한 관리가 필요합니다.",
            학업: "두 가지 과목 사이에서 고민하고 있습니다. 우선순위를 정해 균형 있게 배분하세요."
        },
        meanings_rev: {
            종합: "강제로 선택을 강요받거나 혼란이 가중됩니다. 거짓된 평화가 깨지는 시기입니다.",
            연애: "숨겨왔던 갈등이 폭발할 수 있습니다. 회피하지 말고 진실을 마주해야 합니다.",
            금전: "금전적 균형이 깨지고 손실이 발생할 수 있습니다. 빠르게 대책을 세우세요.",
            학업: "결정 장애로 공부 시간을 허비합니다. 한 가지라도 제대로 시작하는 것이 중요합니다."
        },
        meanings_en: {
            General: "You stand at a tense crossroads between two choices. Find your balance and look inward for answers.",
            Love: "You cannot make up your mind and feel conflicted. Postponing a decision may be the wisest approach right now.",
            Money: "You are maintaining a delicate balance between income and expenses. Careful management is essential.",
            Career: "You are torn between two subjects or paths. Set priorities and divide your time wisely."
        },
        meanings_rev_en: {
            General: "A forced choice or added confusion arrives. A false peace is about to shatter.",
            Love: "Hidden tensions are about to explode. Stop avoiding the issue and face the truth directly.",
            Money: "The financial balance breaks down and a loss may occur. Act quickly to find a solution.",
            Career: "Decision paralysis is wasting precious study time. Just start with one thing properly."
        }
    },
    {
        name: "Three of Swords",
        img: "images/swords03.jpg",
        meanings: {
            종합: "마음의 상처나 슬픈 소식이 있을 수 있습니다. 성장을 위한 통찰의 시간입니다.",
            연애: "이별이나 배신감으로 인해 마음이 아픈 시기입니다. 치유를 위한 시간이 필요합니다.",
            금전: "금전적 손실이나 계약 파기로 실망할 수 있습니다. 냉정하게 상황을 수습하세요.",
            학업: "성적이 기대에 못 미쳐 좌절할 수 있습니다. 슬픔을 딛고 원인을 찾아야 합니다."
        },
        meanings_rev: {
            종합: "상처가 회복되기 시작하고 고통에서 벗어납니다. 화해와 용서의 기운이 옵니다.",
            연애: "오해가 풀리고 다시 관계를 회복합니다. 아픈 만큼 더 단단해지는 시기입니다.",
            금전: "금전적 고비를 넘기고 서서히 안정을 찾습니다. 잃은 것보다 남은 것에 집중하세요.",
            학업: "슬럼프를 극복하고 다시 의욕을 찾습니다. 과거의 실패가 좋은 교훈이 됩니다."
        },
        meanings_en: {
            General: "Emotional pain or sad news may come. This is also a time of insight and growth through hardship.",
            Love: "Heartbreak from separation or betrayal is a real risk. Time and space are needed for healing.",
            Money: "Financial loss or a broken deal may bring disappointment. Compose yourself and manage the situation calmly.",
            Career: "Grades may fall short of expectations and bring discouragement. Find the cause rather than blaming yourself."
        },
        meanings_rev_en: {
            General: "Healing begins and the pain starts to lift. A spirit of reconciliation and forgiveness is arriving.",
            Love: "Misunderstandings dissolve and the relationship recovers. You grow stronger through the experience.",
            Money: "You navigate through financial difficulty and slowly find stability. Focus on what remains, not what was lost.",
            Career: "You overcome the slump and rediscover your motivation. Past failures become your best teachers."
        }
    },
    {
        name: "Four of Swords",
        img: "images/swords04.jpg",
        meanings: {
            종합: "지친 몸과 마음을 쉬게 해야 할 때입니다. 명상과 휴식이 보약입니다.",
            연애: "관계에 휴식기가 필요합니다. 잠시 혼자만의 시간을 가지며 미래를 설계하세요.",
            금전: "활동을 줄이고 자금을 동결하여 지키는 것이 좋습니다. 재정적 안식이 필요합니다.",
            학업: "번아웃을 경계하세요. 잠시 책상을 떠나 머리를 비워야 다음 단계로 나아갑니다."
        },
        meanings_rev: {
            종합: "휴식을 끝내고 다시 활동을 재개합니다. 서서히 몸이 가벼워지는 시기입니다.",
            연애: "거리를 두던 연인과 다시 교류를 시작합니다. 활기찬 만남이 재개됩니다.",
            금전: "멈췄던 자금이 다시 회전하기 시작합니다. 새로운 경제 활동에 나설 준비를 하세요.",
            학업: "다시 공부에 집중할 에너지가 생깁니다. 밀렸던 과제들을 처리하기 좋습니다."
        },
        meanings_en: {
            General: "Your tired body and mind desperately need rest. Meditation and quiet recovery are the best medicine.",
            Love: "The relationship needs a period of rest. Take some time alone and plan thoughtfully for the future.",
            Money: "It is best to reduce activity and hold your funds steady. Financial rest and recovery are needed.",
            Career: "Beware of burnout. You must step away from the desk briefly to reset before you can advance."
        },
        meanings_rev_en: {
            General: "Rest is ending and you are ready to resume activity. Your body and mind are slowly lightening.",
            Love: "A lover you kept at a distance begins to reconnect with you. Lively meetings resume.",
            Money: "Funds that were frozen begin to circulate again. Prepare yourself for new economic activity.",
            Career: "Energy to focus on studying returns. This is a good time to work through everything that had piled up."
        }
    },
    {
        name: "Five of Swords",
        img: "images/swords05.jpg",
        meanings: {
            종합: "승리하더라도 상처뿐인 영광일 수 있습니다. 이기적인 태도를 경계하세요.",
            연애: "자존심 싸움으로 서로에게 상처를 주기 쉽습니다. 이기는 것보다 화합이 중요합니다.",
            금전: "부정한 방법이나 경쟁을 통한 이득은 뒷탈이 생깁니다. 도덕성을 지키세요.",
            학업: "친구와의 경쟁심이 도를 넘을 수 있습니다. 협동보다 독단적인 학습에 치중하게 됩니다."
        },
        meanings_rev: {
            종합: "갈등이 종식되고 평화가 찾아옵니다. 자신의 잘못을 인정하고 사과할 때입니다.",
            연애: "지긋지긋한 싸움을 끝내고 화해하거나, 깔끔하게 관계를 정리하게 됩니다.",
            금전: "금전적 갈등이 해결됩니다. 손해를 보더라도 마음의 평화를 얻는 쪽을 택하세요.",
            학업: "경쟁 압박에서 벗어나 평정심을 찾습니다. 주변과 정보를 공유하며 공부하세요."
        },
        meanings_en: {
            General: "Even a victory may feel like a hollow win. Guard against a selfish or ruthless attitude.",
            Love: "Pride-driven arguments easily wound both parties. Harmony matters far more than being right.",
            Money: "Gains through unfair or competitive means will have consequences. Hold on to your integrity.",
            Career: "Rivalry with friends may escalate beyond healthy competition. You become focused on individual gain over teamwork."
        },
        meanings_rev_en: {
            General: "Conflict comes to an end and peace returns. It is time to admit your own mistakes and apologize.",
            Love: "A grinding argument finally ends in reconciliation, or the relationship is cleanly ended.",
            Money: "Financial conflict is resolved. It may cost you something, but peace of mind is worth more.",
            Career: "The pressure of competition lifts and your equilibrium returns. Reclaim your own natural pace."
        }
    },
    {
        name: "Six of Swords",
        img: "images/swords06.jpg",
        meanings: {
            종합: "어려운 상황을 뒤로하고 더 나은 곳으로 이동합니다. 점진적인 회복의 시기입니다.",
            연애: "갈등이 잦아들고 평온한 관계로 나아갑니다. 여행이나 이사가 계기가 될 수 있습니다.",
            금전: "힘든 자산 상황이 서서히 풀리기 시작합니다. 안전한 곳으로 자금을 옮기세요.",
            학업: "공부 환경을 바꾸면 효율이 올라갑니다. 슬럼프를 벗어나는 단계입니다."
        },
        meanings_rev: {
            종합: "문제를 회피하고 있지는 않나요? 아직은 폭풍우가 다 지나가지 않았습니다.",
            연애: "과거의 문제에서 벗어나지 못하고 제자리걸음 중입니다. 진정한 해결이 필요합니다.",
            금전: "자금 문제가 해결되지 않고 계속 발목을 잡습니다. 임시방편은 통하지 않습니다.",
            학업: "공부 환경을 바꿔도 집중이 안 됩니다. 환경보다 마음가짐의 변화가 우선입니다."
        },
        meanings_en: {
            General: "You leave difficult circumstances behind and move toward a better place. Gradual recovery is underway.",
            Love: "Tensions ease and the relationship moves toward a calmer state. Travel or a move may be the catalyst.",
            Money: "A tough financial situation slowly begins to improve. Move your assets to a safer position.",
            Career: "Changing your study environment will lift your efficiency. You are emerging from your slump."
        },
        meanings_rev_en: {
            General: "Are you running from the problem? The storm has not fully passed yet.",
            Love: "You are still stuck in past issues and going in circles. True resolution is still needed.",
            Money: "The financial problem is unresolved and still holding you back. Temporary fixes will not work.",
            Career: "Changing your study space does not improve your focus. An inner attitude shift must come first."
        }
    },
    {
        name: "Seven of Swords",
        img: "images/swords07.jpg",
        meanings: {
            종합: "잔머리나 속임수를 조심해야 합니다. 정공법보다는 전략이 필요한 때입니다.",
            연애: "상대에게 비밀이 생기거나 솔직하지 못할 수 있습니다. 신뢰를 점검해 보세요.",
            금전: "예상치 못한 손실이나 도난을 주의하세요. 편법적인 투자는 화를 부릅니다.",
            학업: "요행을 바라며 벼락치기를 하기 쉽습니다. 핵심만 골라 듣는 공부가 위험할 수 있습니다."
        },
        meanings_rev: {
            종합: "비밀이 드러나거나 속임수가 탄로 납니다. 솔직하게 털어놓는 것이 상책입니다.",
            연애: "숨겨왔던 진실이 밝혀지며 관계가 변합니다. 거짓 없는 대화로 위기를 넘기세요.",
            금전: "잃어버렸던 것을 되찾거나 잘못된 투자를 바로잡습니다. 정직한 방법이 답입니다.",
            학업: "공부의 요행이 통하지 않음을 깨닫습니다. 다시 정석대로 학습을 시작합니다."
        },
        meanings_en: {
            General: "Be wary of tricks or deception. Strategy and clever maneuvering are needed more than brute force.",
            Love: "Secrets may be forming between you, or honesty may be lacking. Check the foundations of trust.",
            Money: "Guard against unexpected losses or theft. Underhanded investment strategies will ultimately backfire.",
            Career: "You may be tempted to rely on luck or last-minute cramming. Selective studying without real depth is risky."
        },
        meanings_rev_en: {
            General: "Secrets are exposed or a deception is revealed. Coming clean is the best policy.",
            Love: "Hidden truths come to light and change the dynamic. Navigate the crisis with honest conversation.",
            Money: "Something lost is recovered or a bad investment is corrected. The honest path is always the right one.",
            Career: "You realize that study shortcuts do not work. You restart your learning the proper, methodical way."
        }
    },
    {
        name: "Eight of Swords",
        img: "images/swords08.jpg",
        meanings: {
            종합: "스스로 만든 생각의 감옥에 갇혀 있습니다. 눈가리개를 풀면 길이 보입니다.",
            연애: "관계를 어떻게 해야 할지 몰라 답답한 상태입니다. 공포를 버리고 직시하세요.",
            금전: "자금 상황이 묶여 꼼짝 못 하는 형국입니다. 실질적인 위기보다 심리적 압박이 큽니다.",
            학업: "성적이 안 나올까 봐 불안해서 공부를 시작조차 못 하고 있습니다. 일단 시작하세요."
        },
        meanings_rev: {
            종합: "속박에서 벗어나 자유를 찾습니다. 드디어 문제의 해결책을 발견하게 됩니다.",
            연애: "답답했던 관계에 실마리가 풀립니다. 자신의 가치를 깨닫고 주도적으로 행동합니다.",
            금전: "막혔던 자금 흐름이 트이기 시작합니다. 경제적 제약에서 벗어날 기회가 옵니다.",
            학업: "공부의 장벽을 허물고 자신감을 되찾습니다. 막혔던 개념이 이해되기 시작합니다."
        },
        meanings_en: {
            General: "You are trapped in a prison of your own making. Remove the blindfold and the way forward will appear.",
            Love: "You feel paralyzed about what to do in the relationship. Release your fear and see the situation clearly.",
            Money: "Your finances feel frozen and immovable. The real crisis is more psychological than financial.",
            Career: "Anxiety about poor grades is stopping you from studying at all. Just start, and momentum will follow."
        },
        meanings_rev_en: {
            General: "You break free from your bonds and rediscover freedom. You finally find the solution to the problem.",
            Love: "Clarity returns to an oppressive relationship. You realize your own worth and act with new confidence.",
            Money: "A blocked financial flow begins to move again. The opportunity to escape economic restrictions arrives.",
            Career: "You tear down the wall blocking your studies and regain your confidence. Concepts that stumped you click into place."
        }
    },
    {
        name: "Nine of Swords",
        img: "images/swords09.jpg",
        meanings: {
            종합: "불안과 스트레스로 밤잠을 설치는 시기입니다. 걱정의 90%는 현실화되지 않습니다.",
            연애: "상대에 대한 의심이나 지나친 걱정으로 괴롭습니다. 혼자만의 상상을 멈추세요.",
            금전: "금전적 압박에 시달리지만 실제로 망한 것은 아닙니다. 냉정한 수치 확인이 필요합니다.",
            학업: "시험 공포증이나 성적 압박이 극심합니다. 숙면과 마인드 컨트롤이 최우선입니다."
        },
        meanings_rev: {
            종합: "최악의 상황이 지나가고 불안이 가라앉습니다. 드디어 빛이 보이기 시작합니다.",
            연애: "괴롭히던 연애 고민에서 벗어납니다. 마음을 다스리고 현실적인 대화에 나섭니다.",
            금전: "파산이나 큰 손실에 대한 공포에서 탈출합니다. 현실적인 복구 계획이 가동됩니다.",
            학업: "압박감을 털어내고 다시 페이스를 찾습니다. 걱정 대신 행동하기 시작합니다."
        },
        meanings_en: {
            General: "Anxiety and stress are causing sleepless nights. Remember: ninety percent of worries never materialize.",
            Love: "Excessive suspicion or worry about your partner is tormenting you. Stop the cycle of lonely overthinking.",
            Money: "Financial pressure is weighing heavily, but you haven't actually collapsed yet. Get a clear look at the actual numbers.",
            Career: "Severe exam anxiety or grade pressure is overwhelming. Healthy sleep and mindset training are your top priorities."
        },
        meanings_rev_en: {
            General: "The worst has passed and anxiety is subsiding. Light at the end of the tunnel is visible at last.",
            Love: "You free yourself from tormenting relationship worries. Compose yourself and engage in real, grounded conversation.",
            Money: "The fear of bankruptcy or major loss loosens its grip. A realistic recovery plan is now set in motion.",
            Career: "You shed the overwhelming pressure and find your rhythm again. You start taking action instead of just worrying."
        }
    },
    {
        name: "Ten of Swords",
        img: "images/swords10.jpg",
        meanings: {
            종합: "최악의 상황입니다. 하지만 이는 끝을 의미하며, 이제 올라갈 일만 남았습니다.",
            연애: "관계의 파탄이나 큰 상처를 받을 수 있습니다. 완전히 정리해야 새 시작이 가능합니다.",
            금전: "금전적으로 바닥을 치는 운입니다. 손절할 것은 확실히 손절해야 합니다.",
            학업: "학습 계획이 완전히 무산되거나 최악의 성적을 받을 수 있습니다. 바닥부터 다시 쌓으세요."
        },
        meanings_rev: {
            종합: "위기에서 가까스로 살아남습니다. 고통이 끝나고 재생의 기운이 돕니다.",
            연애: "최악의 고비를 넘기고 관계를 재건하거나, 새로운 인연을 만날 준비가 됩니다.",
            금전: "최악의 재정 상태에서 반등의 기회를 잡습니다. 빚이나 손실이 서서히 해결됩니다.",
            학업: "실패를 딛고 다시 일어섭니다. 바닥을 쳤으니 이제는 올라갈 일만 남았습니다."
        },
        meanings_en: {
            General: "This is rock bottom. But it also signals an ending—from here, there is nowhere to go but up.",
            Love: "A devastating breakup or deep wound may occur. A clean break is necessary to allow a new start.",
            Money: "You are hitting a financial low. Make the decision to cut losses decisively and completely.",
            Career: "Your study plans may completely fall apart or bring the worst grades yet. Rebuild patiently from the ground floor."
        },
        meanings_rev_en: {
            General: "You narrowly survive the crisis. The suffering is ending and the energy of renewal is arriving.",
            Love: "You survive the worst of the ordeal and begin to rebuild the relationship, or prepare for a truly fresh start.",
            Money: "From the depths of financial trouble, an opportunity for a rebound appears. Debt and losses begin to be resolved.",
            Career: "You rise again after a major failure. You have hit the bottom, so now the only direction is up."
        }
    },
    {
        name: "Page of Swords",
        img: "images/swords11.jpg",
        meanings: {
            종합: "경계심과 관찰력이 뛰어난 시기입니다. 새로운 정보나 소식에 귀를 기울이세요.",
            연애: "상대를 탐색하며 조심스럽게 다가가는 시기입니다. 지적인 대화가 매력적입니다.",
            금전: "새로운 투자 정보를 수집하기에 좋습니다. 서두르지 말고 시장 조사를 철저히 하세요.",
            학업: "비판적인 사고가 길러집니다. 논리적인 분석이 필요한 과목에서 두각을 나타냅니다."
        },
        meanings_rev: {
            종합: "경솔한 말로 화를 부를 수 있습니다. 확인되지 않은 정보를 퍼뜨리지 마세요.",
            연애: "냉소적인 태도로 상대에게 상처를 줄 수 있습니다. 말 한마디를 조심해야 합니다.",
            금전: "어설픈 정보에 투자했다가 손해를 봅니다. 사기나 뜬소문을 극도로 경계하세요.",
            학업: "아는 체하다가 망신을 당할 수 있습니다. 깊이 없는 공부를 경계하고 겸손해지세요."
        },
        meanings_en: {
            General: "Your vigilance and observational skills are sharp. Pay close attention to new information and news.",
            Love: "You approach your interest with cautious curiosity. Intellectually stimulating conversation is genuinely attractive.",
            Money: "This is an excellent time to gather new investment research. Be thorough in your market analysis before acting.",
            Career: "Your critical thinking skills are sharpening. You stand out in subjects requiring logical analysis."
        },
        meanings_rev_en: {
            General: "Careless speech may cause unnecessary trouble. Do not spread information that hasn't been verified.",
            Love: "A cynical attitude may hurt your partner. Every single word you speak now must be chosen with care.",
            Money: "An investment based on weak information leads to losses. Be extremely wary of scams and unfounded rumors.",
            Career: "Showing off shallow knowledge may lead to embarrassment. Stay humble and commit to studying with real depth."
        }
    },
    {
        name: "Knight of Swords",
        img: "images/swords12.jpg",
        meanings: {
            종합: "목표를 향해 거침없이 돌진하는 추진력의 화신입니다. 결단력이 돋보이는 날입니다.",
            연애: "적극적으로 대시하거나 갈등을 정면 돌파합니다. 직선적인 사랑을 하게 됩니다.",
            금전: "빠른 판단으로 수익을 쟁취합니다. 기회가 왔을 때 망설이지 말고 잡으세요.",
            학업: "단기간에 엄청난 양의 공부를 몰아치기에 좋습니다. 돌파력이 최고입니다."
        },
        meanings_rev: {
            종합: "무모한 돌진으로 사고를 칠 수 있습니다. 성급함이 가장 큰 적입니다.",
            연애: "너무 거칠게 몰아붙여 상대를 겁나게 할 수 있습니다. 부드러운 화법이 필요합니다.",
            금전: "충동적인 매매로 큰 손해를 볼 수 있습니다. 질주를 멈추고 냉정해져야 합니다.",
            학업: "진도는 빠르나 실수가 많습니다. 아는 문제도 틀리기 쉬우니 검토가 필수입니다."
        },
        meanings_en: {
            General: "You charge forward toward your goal with unstoppable drive. Your decisiveness is your defining trait today.",
            Love: "You take bold initiative or confront relationship conflicts head-on. A direct and honest love is unfolding.",
            Money: "Quick and decisive judgment secures the prize. When opportunity knocks, do not hesitate.",
            Career: "Ideal for pushing through a massive amount of study in a short time. Your breakthrough power is at its peak."
        },
        meanings_rev_en: {
            General: "A reckless charge could cause a serious mishap. Your impulsiveness is your greatest enemy right now.",
            Love: "Pushing too aggressively may frighten your partner away. A gentler approach and softer tone are necessary.",
            Money: "An impulsive trade or purchase could result in a major loss. Stop the charge and cool down your thinking.",
            Career: "Rapid progress is undermined by careless errors. Even familiar problems are easily missed—always review your work."
        }
    },
    {
        name: "Queen of Swords",
        img: "images/swords13.jpg",
        meanings: {
            종합: "예리한 통찰력과 엄격한 이성을 가진 지도자입니다. 공정함이 답입니다.",
            연애: "감정에 휘둘리지 않는 똑 부러지는 사랑입니다. 때론 너무 차갑게 느껴질 수 있습니다.",
            금전: "냉철한 자산 관리로 한 치의 오차도 허용하지 않습니다. 명확한 가계부가 필요합니다.",
            학업: "핵심을 꿰뚫는 분석력이 빛납니다. 오답 노트를 완벽하게 정리하기 좋은 날입니다."
        },
        meanings_rev: {
            종합: "지나치게 비판적이고 날카로워 주변 사람들이 떠날 수 있습니다. 자비가 필요합니다.",
            연애: "상대의 단점만 지적하며 고집을 부릴 수 있습니다. 마음의 문을 조금 더 여세요.",
            금전: "금전적으로 인색해지고 주변과 마찰이 생깁니다. 융통성 없는 관리가 독이 됩니다.",
            학업: "자신의 방식만 옳다고 믿어 새로운 지식을 거부합니다. 시야를 넓혀야 합니다."
        },
        meanings_en: {
            General: "A leader of sharp insight and strict rationality. Fairness and impartiality are the right answers here.",
            Love: "This is a love that is not swayed by emotion. Clarity and directness are valued, though it may sometimes feel cold.",
            Money: "Cold, precise asset management allows absolutely no margin for error. A crystal-clear budget is necessary.",
            Career: "Your ability to cut through to the core is exceptional. Today is perfect for creating a flawless error-review notebook."
        },
        meanings_rev_en: {
            General: "Being overly critical and sharp may drive people away. A measure of compassion is needed.",
            Love: "You may be pointing out only your partner's flaws and stubbornly holding your ground. Open your heart a little.",
            Money: "You are becoming financially stingy and creating friction with others. Inflexible management is becoming a liability.",
            Career: "Believing only your own method is correct prevents you from absorbing new knowledge. Broaden your horizons."
        }
    },
    {
        name: "King of Swords",
        img: "images/swords14.jpg",
        meanings: {
            종합: "최고의 지성과 권위를 가진 전문가입니다. 원칙을 지키면 큰 성공이 따릅니다.",
            연애: "성숙하고 논리적인 연애를 합니다. 상대에게 든든한 조언자가 되어줍니다.",
            금전: "전문가적 안목으로 큰 수익을 설계합니다. 법적, 서류적 완벽함이 재물을 지킵니다.",
            학업: "학습 전략을 완벽하게 수립합니다. 논술이나 전문직 시험에 아주 유리한 운입니다."
        },
        meanings_rev: {
            종합: "독단적이고 권위적인 태도로 비난받을 수 있습니다. 힘을 남용하지 마세요.",
            연애: "사랑을 머리로만 하려 합니다. 따뜻한 감정이 배제된 연애는 상대를 지치게 합니다.",
            금전: "법적 분쟁이나 세무 관련 문제가 생길 수 있습니다. 원칙을 어긴 대가를 치릅니다.",
            학업: "지식에 대한 오만함이 성장을 가로막습니다. 모르는 것을 인정하는 용기가 필요합니다."
        },
        meanings_en: {
            General: "A supreme intellect and authority figure. Uphold your principles and great success will follow.",
            Love: "You engage in a mature and logical relationship. You become a trusted and steadfast advisor to your partner.",
            Money: "Expert-level vision designs a path to significant gains. Legal and documentary precision protects your wealth.",
            Career: "You establish a flawless study strategy. Highly advantageous for written exams and professional qualifications."
        },
        meanings_rev_en: {
            General: "An authoritarian and dogmatic attitude may invite criticism. Do not abuse the power you hold.",
            Love: "You are trying to conduct love purely with your head. A love stripped of warmth and feeling will exhaust your partner.",
            Money: "Legal disputes or tax-related problems may arise. The price of breaking the rules must now be paid.",
            Career: "Arrogance about your knowledge is blocking your growth. The courage to admit what you don't know is essential."
        }
    }
];
