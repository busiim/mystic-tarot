const wandCards = [
    {
        name: "Ace of Wands",
        img: "images/wands01.jpg",
        meanings: {
            종합: "새로운 기회와 에너지가 샘솟습니다. 창조적인 시작을 하기에 완벽한 때입니다.",
            연애: "새로운 설렘이 시작됩니다. 열정적인 사랑의 불씨가 당겨지는 시기입니다.",
            금전: "새로운 수익원이 생기거나 투자 기회가 찾아옵니다. 적극적으로 움직이세요.",
            학업: "새로운 프로젝트나 공부를 시작하기에 최적입니다. 아이디어가 폭발합니다."
        },
        meanings_rev: {
            종합: "의욕만 앞서고 실행력이 부족합니다. 시작이 지연될 수 있으니 재정비하세요.",
            연애: "금방 식어버리는 사랑일 수 있습니다. 서두르다 실망할 수 있으니 주의하세요.",
            금전: "금전적 계획이 무산되거나 기대했던 수입이 늦어질 수 있습니다.",
            학업: "집중력이 떨어지고 의지가 약해집니다. 목표를 다시 설정해야 합니다."
        },
        meanings_en: {
            General: "New opportunity and vibrant energy are welling up. This is the perfect moment for a creative new beginning.",
            Love: "Fresh excitement is igniting. The spark of a passionate love is being kindled right now.",
            Money: "A new revenue stream emerges or an investment opportunity arrives. Move boldly and proactively.",
            Career: "Ideal for launching a new project or field of study. Ideas are exploding with possibility."
        },
        meanings_rev_en: {
            General: "Enthusiasm is running ahead of execution. A beginning is being delayed—it's time to regroup and recalibrate.",
            Love: "This love may burn out quickly. Rushing in could lead to disappointment, so proceed with care.",
            Money: "A financial plan may fall through or expected income may arrive late.",
            Career: "Concentration falters and willpower weakens. Your goals need to be reset clearly."
        }
    },
    {
        name: "Two of Wands",
        img: "images/wands02.jpg",
        meanings: {
            종합: "더 큰 세상을 향한 계획을 세울 때입니다. 선택과 결단이 필요합니다.",
            연애: "관계의 미래를 진지하게 고민하는 단계입니다. 함께 멀리 내다보세요.",
            금전: "자산 확장을 위한 장기적인 계획에 길합니다. 해외 관련 투자도 좋습니다.",
            학업: "더 높은 목표를 세우고 나아갈 준비를 하세요. 유학이나 진학에 유리합니다."
        },
        meanings_rev: {
            종합: "막연한 불안감 때문에 결정을 내리지 못하고 있습니다. 시야가 좁아진 상태입니다.",
            연애: "서로 다른 미래를 꿈꾸고 있을 수 있습니다. 가치관의 차이를 확인하세요.",
            금전: "준비 없는 확장은 손해를 부릅니다. 현재 가진 것을 지키는 것이 우선입니다.",
            학업: "계획만 세우다 시간을 보냅니다. 실천 가능한 작은 일부터 시작하세요."
        },
        meanings_en: {
            General: "It is time to draw up a plan aimed at a larger world. Choice and determination are now required.",
            Love: "You have entered the stage of seriously contemplating the future of this relationship together. Look far ahead as a pair.",
            Money: "Highly favorable for long-term plans aimed at expanding your assets. Overseas-related investments also look positive.",
            Career: "Set more ambitious goals and prepare to pursue them. Studying abroad or advancing to higher education looks favorable."
        },
        meanings_rev_en: {
            General: "A vague sense of anxiety is preventing a decision from being made. Your field of vision has narrowed.",
            Love: "You may be dreaming of different futures. The time to check for alignment in your core values has come.",
            Money: "Expansion without preparation leads to losses. Protecting what you currently have must take priority.",
            Career: "Time is being spent on planning rather than doing. Start with small, achievable actions right now."
        }
    },
    {
        name: "Three of Wands",
        img: "images/wands03.jpg",
        meanings: {
            종합: "노력의 결과가 보이기 시작합니다. 영역이 확장되고 협력이 원활합니다.",
            연애: "안정적인 관계 속에서 함께 성장합니다. 장거리 연애라면 만남의 운이 있습니다.",
            금전: "수입원이 안정화되고 확장됩니다. 무역이나 이동을 통한 이득이 있습니다.",
            학업: "시야가 넓어지고 지식이 깊어집니다. 그룹 활동에서 좋은 성과를 냅니다."
        },
        meanings_rev: {
            종합: "기다리던 소식이 늦어지거나 협력에 차질이 생깁니다. 인내심이 필요합니다.",
            연애: "약속이 취소되거나 소통에 답답함을 느낍니다. 서로의 일정을 배려하세요.",
            금전: "자금 회수가 늦어질 수 있습니다. 무리한 확장은 당분간 피하세요.",
            학업: "공부의 방향이 흐트러집니다. 기초가 흔들리지 않도록 다시 점검하세요."
        },
        meanings_en: {
            General: "The results of your efforts are beginning to show. Your reach is expanding and collaboration is flowing smoothly.",
            Love: "You are growing together within a stable relationship. If you are in a long-distance relationship, a reunion is in sight.",
            Money: "Your income streams are stabilizing and expanding. Gains through trade or movement are coming.",
            Career: "Your vision is broadening and your knowledge is deepening. Group activities produce excellent results."
        },
        meanings_rev_en: {
            General: "Awaited news is delayed or a collaboration hits a snag. Patience is the only path forward.",
            Love: "Plans are being cancelled or communication is feeling frustratingly slow. Be considerate of each other's schedules.",
            Money: "Recovery of funds may be delayed. Avoid ambitious expansion for the time being.",
            Career: "Your study direction is becoming scattered. Go back and make sure the foundation hasn't cracked."
        }
    },
    {
        name: "Four of Wands",
        img: "images/wands04.jpg",
        meanings: {
            종합: "축하와 화합의 시기입니다. 노력 끝에 얻은 평화와 안정을 만끽하세요.",
            연애: "결혼이나 약혼 등 경사가 따릅니다. 매우 안정적이고 행복한 관계입니다.",
            금전: "금전적으로 풍요롭고 평안합니다. 가정을 위해 기분 좋게 지출할 일이 생깁니다.",
            학업: "시험 합격이나 목표 달성 후의 휴식입니다. 성취감을 충분히 느끼세요."
        },
        meanings_rev: {
            종합: "일시적인 불안정함이 있으나 큰 문제는 아닙니다. 내실을 다지는 시기입니다.",
            연애: "사소한 일로 다툴 수 있으나 금방 화해합니다. 예의를 갖추는 것이 중요합니다.",
            금전: "예상보다 지출이 많아질 수 있습니다. 축하 파티 등 모임 비용을 조절하세요.",
            학업: "성과는 있으나 본인은 만족스럽지 못합니다. 완벽주의를 조금 내려놓으세요."
        },
        meanings_en: {
            General: "A time of celebration and togetherness. Savor the peace and stability you have earned through hard work.",
            Love: "A joyful event—an engagement or marriage—is on the horizon. The relationship is wonderfully stable and happy.",
            Money: "Financially comfortable and at peace. A delightfully happy occasion to spend money for your loved ones arrives.",
            Career: "A well-deserved rest after passing an exam or reaching a major goal. Allow yourself to fully feel the satisfaction."
        },
        meanings_rev_en: {
            General: "There is a temporary instability, but it is not a serious problem. This is a time to strengthen your inner foundation.",
            Love: "A minor argument may flare up, but reconciliation comes quickly. Maintaining basic courtesy is important.",
            Money: "Expenses may run higher than anticipated. Keep the cost of celebrations and gatherings under control.",
            Career: "Results are good, but you personally don't feel fully satisfied. Try to ease up on the perfectionism a little."
        }
    },
    {
        name: "Five of Wands",
        img: "images/wands05.jpg",
        meanings: {
            종합: "선의의 경쟁과 혼란이 공존합니다. 자신의 의견을 명확히 전달해야 합니다.",
            연애: "사소한 말다툼이 잦은 시기입니다. 서로의 다름을 인정하는 과정입니다.",
            금전: "치열한 경쟁 속에서 이득을 쟁취해야 합니다. 돈을 지키기 위한 노력이 필요합니다.",
            학업: "주변의 경쟁자들로 인해 자극을 받습니다. 토론이나 경쟁 학습에 유리합니다."
        },
        meanings_rev: {
            종합: "불필요한 갈등이 해결되고 타협점을 찾습니다. 혼란이 수습되는 시기입니다.",
            연애: "지루했던 싸움이 끝나고 평화가 찾아옵니다. 서로 양보하며 화해하세요.",
            금전: "금전적 분쟁이 마무리됩니다. 복잡한 계산 관계가 정리되는 운입니다.",
            학업: "경쟁 압박에서 벗어나 마음이 편안해집니다. 자기 페이스를 되찾으세요."
        },
        meanings_en: {
            General: "Healthy competition and a degree of chaos coexist. You must express your own perspective with clarity.",
            Love: "Minor squabbles become more frequent. This is part of the process of learning to accept each other's differences.",
            Money: "You must fight hard to secure gains in fierce competition. Active effort is needed to protect your financial interests.",
            Career: "Rivals in your environment provide stimulation and motivation. Debate-style or competitive learning environments suit you well."
        },
        meanings_rev_en: {
            General: "Unnecessary conflict is resolved and a compromise is found. The turmoil is finally being contained.",
            Love: "A long and tiresome argument ends and peace returns. Both parties yield a little and make up.",
            Money: "A financial dispute reaches a conclusion. Complex financial entanglements are finally getting sorted out.",
            Career: "The pressure of competition lifts and your mind feels at ease again. You reclaim your own natural pace."
        }
    },
    {
        name: "Six of Wands",
        img: "images/wands06.jpg",
        meanings: {
            종합: "승리와 인정의 시기입니다. 당신의 노력이 결실을 맺어 칭송을 듣게 됩니다.",
            연애: "연애운이 최고조입니다. 고백에 성공하거나 축복받는 사랑을 합니다.",
            금전: "투자나 사업에서 승전보가 들려옵니다. 금전적인 보상과 명예가 따릅니다.",
            학업: "합격이나 수상 등 좋은 소식이 들려옵니다. 자신감을 가져도 좋습니다."
        },
        meanings_rev: {
            종합: "자만심으로 공든 탑이 무너질 수 있습니다. 겸손함이 필요한 시기입니다.",
            연애: "자신의 체면을 상대보다 더 중요시하고 있지는 않나요? 진심을 보여주세요.",
            금전: "생각보다 이득이 적거나 성과를 남에게 뺏길 수 있으니 주의하세요.",
            학업: "방심했던 부분을 점검하세요. 결과가 기대에 못 미칠 수 있습니다."
        },
        meanings_en: {
            General: "A time of victory and recognition. Your effort bears fruit and you receive well-deserved praise.",
            Love: "Your romantic fortune is at its absolute peak. A confession succeeds or a love that everyone celebrates is yours.",
            Money: "Triumphant news arrives from an investment or business venture. Financial reward and recognition follow.",
            Career: "Wonderful news—an acceptance, an award—is on its way. You are fully entitled to carry yourself with confidence."
        },
        meanings_rev_en: {
            General: "Arrogance could topple the tower you have built so carefully. Humility is urgently needed right now.",
            Love: "Are you placing your own pride above your partner? Let your sincerity show through.",
            Money: "Gains may be smaller than expected, or your achievements may be claimed by someone else. Stay vigilant.",
            Career: "Check the areas where you let your guard down. Results may not meet your expectations."
        }
    },
    {
        name: "Seven of Wands",
        img: "images/wands07.jpg",
        meanings: {
            종합: "유리한 고지에서 방어하는 형국입니다. 소신을 지키면 결국 승리합니다.",
            연애: "라이벌이 나타날 수 있으나 당신의 매력이 더 돋보입니다. 사랑을 지키세요.",
            금전: "수입을 지키기 위한 고군분투가 예상됩니다. 끈기 있게 버티면 이득이 됩니다.",
            학업: "많은 과제 속에서도 끝까지 밀어붙이는 힘이 생깁니다. 기세에서 밀리지 마세요."
        },
        meanings_rev: {
            종합: "압박감에 굴복하거나 불리한 상황에 처할 수 있습니다. 무리한 고집은 피하세요.",
            연애: "관계 유지가 버겁게 느껴집니다. 혼자 모든 짐을 지려 하지 마세요.",
            금전: "예상치 못한 지출 요구가 들어옵니다. 냉정한 판단이 필요한 시점입니다.",
            학업: "경쟁에서 밀리거나 슬럼프가 올 수 있습니다. 전략적인 휴식이 필요합니다."
        },
        meanings_en: {
            General: "You hold the high ground and are in a defensive position. Stand by your convictions and victory will be yours.",
            Love: "A rival may appear, but your own appeal shines more brightly. Fight to protect the love that is yours.",
            Money: "A period of hard struggle to defend your income is expected. Hold on with tenacity and it will pay off.",
            Career: "The strength to push all the way through a mountain of assignments is building inside you. Don't lose the mental edge."
        },
        meanings_rev_en: {
            General: "You may yield to pressure or find yourself in a disadvantageous position. Don't cling to a stubborn stance.",
            Love: "Maintaining the relationship is starting to feel like a burden. Stop trying to carry all the weight alone.",
            Money: "An unexpected demand for payment arrives. A moment of cool, rational judgment is needed.",
            Career: "You may fall behind in the competition or a slump may hit. Strategic rest is needed right now."
        }
    },
    {
        name: "Eight of Wands",
        img: "images/wands08.jpg",
        meanings: {
            종합: "상황이 매우 급격하게 진행됩니다. 빠른 결정과 행동이 필요한 시기입니다.",
            연애: "사랑의 속도가 빠릅니다. 갑작스러운 고백이나 관계의 급진전이 있습니다.",
            금전: "돈의 회전이 빨라집니다. 추진하던 계약이나 거래가 순식간에 성사됩니다.",
            학업: "지식을 습득하는 속도가 매우 빠릅니다. 단기 집중 학습에 아주 유리합니다."
        },
        meanings_rev: {
            종합: "너무 서두르다 실수를 하거나 계획이 지체됩니다. 속도 조절이 필요합니다.",
            연애: "너무 성급한 진도가 상대를 당황시킬 수 있습니다. 천천히 다가가세요.",
            금전: "성급한 투자가 손해를 부릅니다. 자금 흐름이 막힐 수 있으니 대비하세요.",
            학업: "진도는 빠르지만 머리에 남는 것이 없습니다. 복습에 더 신경 써야 합니다."
        },
        meanings_en: {
            General: "Events are accelerating dramatically. Fast decisions and swift action are the order of the day.",
            Love: "The pace of love is rapid. A sudden confession or a dramatic leap forward in the relationship is incoming.",
            Money: "The velocity of money is picking up. A contract or deal you have been pushing for closes in an instant.",
            Career: "Your capacity to absorb information is moving at high speed. Intensive short-burst study sessions are highly effective."
        },
        meanings_rev_en: {
            General: "Rushing causes mistakes or plans hit unexpected delays. Speed regulation is necessary.",
            Love: "Moving too fast may startle and overwhelm your partner. Slow down and approach more gently.",
            Money: "A hasty investment leads to losses. Cash flow may seize up, so prepare contingency plans now.",
            Career: "Progress is fast but nothing is sticking. Dedicate more serious attention to review and consolidation."
        }
    },
    {
        name: "Nine of Wands",
        img: "images/wands09.jpg",
        meanings: {
            종합: "마지막 고비입니다. 지쳐있지만 조금만 더 버티면 완성이 기다립니다.",
            연애: "과거의 상처로 인해 방어적인 태도를 보일 수 있습니다. 마음을 조금 여세요.",
            금전: "자금을 지키기 위한 인내가 필요합니다. 추가 지출을 극도로 자제하세요.",
            학업: "시험 직전의 막바지 고비입니다. 체력은 바닥이지만 끝까지 완주하세요."
        },
        meanings_rev: {
            종합: "한계에 부딪혀 포기하고 싶은 마음이 듭니다. 휴식 없는 주행의 부작용입니다.",
            연애: "관계에 대한 피로감이 극에 달합니다. 잠시 혼자만의 시간이 필요합니다.",
            금전: "준비 부족으로 손실이 발생할 수 있습니다. 방어막이 뚫리지 않게 조심하세요.",
            학업: "중도 포기의 유혹이 강합니다. 목표를 낮추더라도 끝까지 놓지 마세요."
        },
        meanings_en: {
            General: "This is the final hurdle. You are exhausted, but hold on just a little longer—completion awaits you.",
            Love: "Past wounds may be making you defensively guarded. Try to open your heart just a fraction more.",
            Money: "Patience and endurance are required to protect what you have. Drastically limit any additional expenditures.",
            Career: "You are in the final stretch before an exam. Your stamina is nearly gone, but cross the finish line."
        },
        meanings_rev_en: {
            General: "You have hit a wall and the urge to give up is rising. This is the consequence of driving without rest.",
            Love: "Relationship fatigue has reached its peak. You urgently need some time to yourself.",
            Money: "Insufficient preparation may lead to a loss. Make sure your defenses are not breached.",
            Career: "The temptation to quit halfway is intense. Lower the target if needed, but don't let go entirely."
        }
    },
    {
        name: "Ten of Wands",
        img: "images/wands10.jpg",
        meanings: {
            종합: "책임감이 너무 무겁습니다. 혼자 다 감당하려 하지 말고 짐을 나누세요.",
            연애: "관계를 유지하려는 노력이 희생처럼 느껴집니다. 대화가 절실한 시점입니다.",
            금전: "금전적 압박이 심한 시기입니다. 부채 관리나 지출 구조조정이 필요합니다.",
            학업: "공부량이 감당하기 힘들 정도로 많습니다. 우선순위를 정해 처리하세요."
        },
        meanings_rev: {
            종합: "과도한 부담에서 벗어나거나 결국 무너질 수 있습니다. 한계를 인정하세요.",
            연애: "더 이상 견디지 못하고 관계를 포기하고 싶어집니다. 휴식이 우선입니다.",
            금전: "감당할 수 없는 지출로 파산 위기가 올 수 있습니다. 전문가의 도움을 받으세요.",
            학업: "번아웃이 찾아와 아무것도 하기 싫어집니다. 일단 책상을 떠나 쉬어야 합니다."
        },
        meanings_en: {
            General: "The burden of responsibility has become crushing. Stop trying to carry everything alone—share the load.",
            Love: "The effort to maintain the relationship now feels like a sacrifice. An urgent and honest conversation is needed.",
            Money: "Financial pressure is intense and bearing down hard. Debt management and expense restructuring are essential.",
            Career: "The volume of study is almost too much to handle. Set your priorities and tackle them in order."
        },
        meanings_rev_en: {
            General: "You are either escaping an excessive burden or finally collapsing under it. Acknowledge your limits.",
            Love: "You can no longer endure it and the desire to abandon the relationship is growing. Rest must come first.",
            Money: "Uncontrollable spending may bring a financial crisis to a head. Please seek professional guidance.",
            Career: "Burnout arrives and the motivation to do anything disappears. Step away from the desk and rest first."
        }
    },
    {
        name: "Page of Wands",
        img: "images/wands11.jpg",
        meanings: {
            종합: "호기심 많은 메신저입니다. 새로운 소식이나 흥미로운 제안이 찾아옵니다.",
            연애: "풋풋하고 열정적인 연애의 시작입니다. 즐거운 데이트 소식이 있습니다.",
            금전: "새로운 수익 모델에 대한 아이디어가 떠오릅니다. 작게 시작해 보세요.",
            학업: "새로운 공부에 대한 의욕이 넘칩니다. 기초를 배우는 즐거움을 누리세요."
        },
        meanings_rev: {
            종합: "나쁜 소식이 들리거나 의욕만 앞서 실천하지 못합니다. 끈기가 부족합니다.",
            연애: "유치한 행동으로 상대를 실망시킬 수 있습니다. 신중하게 행동하세요.",
            금전: "철없는 지출로 돈을 낭비하기 쉽습니다. 돈의 가치를 다시 생각하세요.",
            학업: "금방 싫증을 내고 다른 공부로 눈을 돌립니다. 마무리에 집중하세요."
        },
        meanings_en: {
            General: "A highly curious messenger arrives. New and exciting news or an intriguing proposal is coming your way.",
            Love: "A fresh and passionate beginning of a love story. There is news of a fun and enjoyable date.",
            Money: "An idea for a new revenue model springs to mind. Start small and test it out.",
            Career: "Enthusiasm for new learning is bursting at the seams. Revel in the joy of discovering the fundamentals."
        },
        meanings_rev_en: {
            General: "Bad news arrives, or enthusiasm outpaces execution. Follow-through and persistence are lacking.",
            Love: "Immature behavior may disappoint your partner. Think carefully before you act.",
            Money: "Thoughtless, childish spending leads to waste. Reconsider your understanding of the value of money.",
            Career: "You lose interest quickly and your attention drifts to something new. Commit to finishing what you start."
        }
    },
    {
        name: "Knight of Wands",
        img: "images/wands12.jpg",
        meanings: {
            종합: "거침없는 실행력과 열정의 화신입니다. 이동이나 이사 운이 있습니다.",
            연애: "뜨겁고 빠른 사랑에 빠집니다. 적극적인 태도로 관계를 리드하세요.",
            금전: "모험적인 투자에 과감히 뛰어듭니다. 빠른 수익을 기대할 수 있는 운입니다.",
            학업: "추진력이 좋아 진도가 팍팍 나갑니다. 목표를 향해 거침없이 돌진하세요."
        },
        meanings_rev: {
            종합: "성급함 때문에 일을 그르칩니다. 분노 조절이나 돌발 행동을 주의하세요.",
            연애: "금방 달아올랐다 식어버립니다. 무책임한 태도가 상처를 줄 수 있습니다.",
            금전: "무모한 베팅으로 큰 손실을 볼 수 있습니다. 질주를 멈추고 점검하세요.",
            학업: "뒷심이 부족합니다. 화려한 시작에 비해 결과물이 초라할 수 있습니다."
        },
        meanings_en: {
            General: "An embodiment of fearless action and burning passion. There is movement energy—a journey or relocation may be imminent.",
            Love: "You fall into a hot and fast love. Take the lead in the relationship with bold confidence.",
            Money: "You dive fearlessly into an adventurous investment. Quick returns are well within reach.",
            Career: "Your drive carries your progress forward at an impressive pace. Charge relentlessly toward your target."
        },
        meanings_rev_en: {
            General: "Recklessness causes things to go badly wrong. Anger mismanagement or impulsive behavior is the real danger.",
            Love: "This love ignites intensely and cools just as quickly. An irresponsible attitude may cause real harm.",
            Money: "A reckless bet could result in a major loss. Stop the headlong charge and take stock of things.",
            Career: "Starts strong but lacks staying power. The final output may be far less impressive than the flashy beginning."
        }
    },
    {
        name: "Queen of Wands",
        img: "images/wands13.jpg",
        meanings: {
            종합: "자신감 넘치고 따뜻한 리더입니다. 당신의 매력이 사람들을 끌어모읍니다.",
            연애: "밝고 활기찬 연애입니다. 당신의 긍정적인 에너지가 관계를 주도합니다.",
            금전: "수완이 좋아 돈을 잘 벌고 잘 씁니다. 사업적 능력이 빛을 발하는 시기입니다.",
            학업: "즐겁게 공부하며 성과도 챙깁니다. 주위 사람들에게 가르쳐주며 더 성장합니다."
        },
        meanings_rev: {
            종합: "질투심이 강해지거나 독단적으로 변할 수 있습니다. 주변을 배려하세요.",
            연애: "히스테리나 지나친 간섭으로 상대가 힘들어합니다. 여유를 가지세요.",
            금전: "허세 부리느라 돈을 낭비하기 쉽습니다. 실속 있는 관리가 필요합니다.",
            학업: "공부보다 외모나 다른 활동에 신경을 더 씁니다. 본분으로 돌아오세요."
        },
        meanings_en: {
            General: "A confident and warm-hearted leader. Your magnetic energy is drawing people to you.",
            Love: "A bright and vibrant romance. Your positive energy is naturally driving the relationship forward.",
            Money: "Your knack for business shines as you earn and spend with equal flair. Entrepreneurial talent is evident.",
            Career: "You study with genuine enjoyment and the results show it. Teaching others deepens your own understanding."
        },
        meanings_rev_en: {
            General: "You may become overly jealous or domineering. Consider the feelings and needs of those around you.",
            Love: "Excessive meddling or dramatic outbursts are exhausting your partner. Give yourself—and them—more breathing room.",
            Money: "It is easy to spend on showing off rather than on what truly matters. Practical, substance-first management is needed.",
            Career: "More energy is going to appearance or other activities than to study. Come back to your responsibilities."
        }
    },
    {
        name: "King of Wands",
        img: "images/wands14.jpg",
        meanings: {
            종합: "강력한 의지와 비전을 가진 지도자입니다. 큰 목표를 달성할 운입니다.",
            연애: "카리스마 있는 사랑을 합니다. 믿음직한 파트너로서 존경받게 됩니다.",
            금전: "큰 규모의 자금을 움직일 수 있는 운입니다. 사업적 성공이 눈앞에 있습니다.",
            학업: "학습 목표를 완벽하게 통제합니다. 장기적인 시험이나 고시에 유리합니다."
        },
        meanings_rev: {
            종합: "독불장군처럼 행동하여 적을 만들기 쉽습니다. 권위를 내려놓으세요.",
            연애: "상대방의 의견을 무시하고 강요하기 쉽습니다. 유연한 태도가 필요합니다.",
            금전: "과도한 자신감으로 위험한 투자를 결정합니다. 주변의 만류를 들으세요.",
            학업: "너무 높은 목표에만 매몰되어 기초를 무시합니다. 자만심을 버리세요."
        },
        meanings_en: {
            General: "A leader of powerful will and compelling vision. Your fortune is aligned to accomplish truly great things.",
            Love: "You love with undeniable charisma. You are respected and deeply trusted as a reliable partner.",
            Money: "The fortune to move significant capital is yours. Business success is right before your eyes.",
            Career: "You are in complete command of your academic goals. Long-term exams and high-stakes qualifications strongly favor you."
        },
        meanings_rev_en: {
            General: "Acting as if you answer to no one will earn you enemies. Set aside the need for authority.",
            Love: "You tend to ignore your partner's input and impose your will. A more flexible and open attitude is needed.",
            Money: "Overconfidence leads to a dangerous investment decision. Listen carefully to those who are urging caution.",
            Career: "You are so fixated on lofty goals that you are neglecting the fundamentals. Discard arrogance entirely."
        }
    }
];
