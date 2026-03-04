const cupCards = [
    {
        name: "Ace of Cups",
        img: "images/cups01.jpg",
        meanings: {
            종합: "새로운 감정이 싹트는 시기입니다. 마음의 평화와 행복이 찾아옵니다.",
            연애: "새로운 사랑이 시작되거나 관계가 깊어집니다. 진심어린 고백을 주고받기 좋습니다.",
            금전: "마음이 풍요로워지는 소식이 들려옵니다. 즐겁게 돈을 쓸 일이 생기는 운입니다.",
            학업: "예술적 감수성이 풍부해집니다. 즐겁게 공부할 수 있는 동기부여가 생깁니다."
        },
        meanings_rev: {
            종합: "감정적인 소모가 심한 시기입니다. 우울감이나 공허함에 빠지지 않도록 주의하세요.",
            연애: "짝사랑으로 끝나거나 감정의 일방통행이 될 수 있습니다. 마음을 추스르세요.",
            금전: "감정에 치우친 지출로 후회할 수 있습니다. 충동적인 기부나 선물을 조심하세요.",
            학업: "공부에 집중하지 못하고 잡생각이 많아집니다. 감정 기복을 조절해야 합니다."
        },
        meanings_en: {
            General: "New emotions are awakening. Peace and joy are flowing into your life.",
            Love: "A new love begins or deepens beautifully. Heartfelt confessions are beautifully exchanged.",
            Money: "Joyful financial news is coming. Delightful spending occasions are on the way.",
            Career: "Artistic sensitivity blossoms. Fresh motivation to enjoy your studies arrives."
        },
        meanings_rev_en: {
            General: "Emotional depletion is significant. Guard against falling into depression or emptiness.",
            Love: "Unrequited feelings or a one-sided emotional flow may result. Take care of your heart.",
            Money: "Emotionally driven spending could lead to regret. Be wary of impulsive giving or gifts.",
            Career: "Distracting thoughts make it hard to study. Learn to manage emotional fluctuations."
        }
    },
    {
        name: "Two of Cups",
        img: "images/cups02.jpg",
        meanings: {
            종합: "화합과 결합의 시기입니다. 마음이 통하는 파트너를 만나게 됩니다.",
            연애: "서로에 대한 애정이 확인되는 완벽한 시기입니다. 연인 사이가 더욱 돈독해집니다.",
            금전: "협동이나 계약을 통해 이득을 봅니다. 동업자와의 호흡이 아주 좋습니다.",
            학업: "그룹 스터디나 파트너와 함께 공부할 때 효율이 극대화됩니다. 서로 돕는 시기입니다."
        },
        meanings_rev: {
            종합: "의견 대립이나 불화가 생길 수 있습니다. 소통의 부재를 경계하세요.",
            연애: "사소한 오해로 관계에 금이 갈 수 있습니다. 자존심보다는 대화가 우선입니다.",
            금전: "동업 관계에 문제가 생기거나 계약이 파기될 수 있습니다. 조건을 재점검하세요.",
            학업: "주변 사람과의 마찰로 공부에 방해를 받습니다. 혼자만의 시간이 필요할 수도 있습니다."
        },
        meanings_en: {
            General: "A time of harmony and union. You will meet a partner whose heart truly resonates with yours.",
            Love: "Mutual affection is confirmed in this perfect moment. The bond between lovers grows much stronger.",
            Money: "Cooperation or a contract brings financial gain. Chemistry with a business partner is excellent.",
            Career: "Group study or partnered work reaches peak efficiency. This is a time of mutual support."
        },
        meanings_rev_en: {
            General: "Disagreements or discord may arise. Be watchful of a breakdown in communication.",
            Love: "A small misunderstanding may crack the relationship. Dialogue should take priority over pride.",
            Money: "A partnership may hit trouble or a contract could be cancelled. Re-examine the terms.",
            Career: "Friction with those around you is disturbing your study. You may need some time alone."
        }
    },
    {
        name: "Three of Cups",
        img: "images/cups03.jpg",
        meanings: {
            종합: "축하할 소식과 즐거운 모임이 가득합니다. 사람들과 기쁨을 나누세요.",
            연애: "즐거운 데이트와 만남이 이어집니다. 친구에서 연인으로 발전할 가능성이 있습니다.",
            금전: "주변 사람들의 도움으로 금전운이 풀립니다. 기분 좋은 지출이 따릅니다.",
            학업: "동료들과의 협동 과제에서 좋은 성과를 냅니다. 함께 기뻐할 일이 생깁니다."
        },
        meanings_rev: {
            종합: "지나친 유흥으로 건강이나 일상이 망가질 수 있습니다. 적당히 즐기세요.",
            연애: "삼각관계나 주변의 간섭으로 피곤해질 수 있습니다. 단둘만의 시간에 집중하세요.",
            금전: "모임이나 유흥비로 돈이 너무 많이 나갑니다. 예산을 초과하는 지출을 막으세요.",
            학업: "노는 분위기에 휩쓸려 공부 흐름을 놓칩니다. 노는 시간과 공부 시간을 구분하세요."
        },
        meanings_en: {
            General: "Celebrations and joyful gatherings fill your days. Share your happiness with others.",
            Love: "Enjoyable dates and meetings continue. A friendship may blossom into romance.",
            Money: "Support from those around you unlocks financial luck. Pleasant spending occasions follow.",
            Career: "Collaborative projects with classmates yield excellent results. There is reason to celebrate together."
        },
        meanings_rev_en: {
            General: "Excessive indulgence may harm your health or routine. Enjoy in moderation.",
            Love: "A love triangle or outside interference may cause exhaustion. Focus on your one-on-one time.",
            Money: "Social events and entertainment costs are draining too much money. Stay within your budget.",
            Career: "The festive atmosphere is breaking your study rhythm. Clearly separate work time from play time."
        }
    },
    {
        name: "Four of Cups",
        img: "images/cups04.jpg",
        meanings: {
            종합: "권태롭고 무기력한 시기입니다. 주변의 기회를 알아채지 못하고 있습니다.",
            연애: "관계가 정체되고 지루해질 수 있습니다. 새로운 자극과 변화가 필요한 때입니다.",
            금전: "좋은 제안이 와도 의구심 때문에 놓칠 수 있습니다. 시야를 넓혀보세요.",
            학업: "공부에 흥미를 잃고 정체기에 빠집니다. 리프레시를 위한 휴식이 필요합니다."
        },
        meanings_rev: {
            종합: "새로운 자극을 찾아 움직이기 시작합니다. 드디어 기회를 발견하게 됩니다.",
            연애: "정체되었던 관계에 활력이 돕니다. 다시 서로에 대한 소중함을 깨닫습니다.",
            금전: "멈춰있던 자금 흐름에 변화가 생깁니다. 새로운 투자처에 관심을 갖게 됩니다.",
            학업: "슬럼프를 극복하고 다시 책상 앞에 앉습니다. 새로운 목표가 생깁니다."
        },
        meanings_en: {
            General: "A period of boredom and low energy. You may be missing opportunities that are right in front of you.",
            Love: "The relationship is feeling stagnant and dull. New excitement and change are needed.",
            Money: "A good offer may arrive, but doubts could cause you to pass it by. Broaden your perspective.",
            Career: "You're losing interest in studying and falling into a rut. A refreshing break is necessary."
        },
        meanings_rev_en: {
            General: "You are starting to seek new stimulation and move forward. An opportunity is finally spotted.",
            Love: "Stagnant energy returns to the relationship. You rediscover how precious the other person is.",
            Money: "A shift occurs in the previously frozen flow of funds. Interest in new investment avenues grows.",
            Career: "You overcome the slump and sit back down at your desk. A new goal takes shape."
        }
    },
    {
        name: "Five of Cups",
        img: "images/cups05.jpg",
        meanings: {
            종합: "상실감과 실망감이 큰 시기입니다. 엎질러진 물보다 남은 기회를 보세요.",
            연애: "이별이나 다툼으로 마음이 아플 수 있습니다. 슬픔을 충분히 겪어야 회복됩니다.",
            금전: "금전적 손실로 인해 위축됩니다. 지나간 손해보다 남은 자산을 지켜야 합니다.",
            학업: "시험 결과에 크게 실망할 수 있습니다. 자책하기보다 원인을 분석하세요."
        },
        meanings_rev: {
            종합: "슬픔을 극복하고 희망을 찾습니다. 과거에서 벗어나 앞으로 나아갈 때입니다.",
            연애: "오해가 풀리고 다시 화해할 기회가 생깁니다. 새로운 사랑을 시작할 준비가 됩니다.",
            금전: "손실을 복구할 수 있는 방법이 보입니다. 주변의 도움을 기꺼이 받으세요.",
            학업: "실패를 딛고 일어섭니다. 지난 실수를 교훈 삼아 더 단단해지는 시기입니다."
        },
        meanings_en: {
            General: "A time of significant loss and disappointment. Look at what remains rather than what has spilled.",
            Love: "Heartbreak from a breakup or conflict is real. Allow yourself to grieve fully before you can recover.",
            Money: "Financial loss leaves you feeling deflated. Guard the assets that remain rather than lamenting what's gone.",
            Career: "A test result may bring great disappointment. Instead of self-blame, analyze the cause."
        },
        meanings_rev_en: {
            General: "You overcome sorrow and find hope. It is time to leave the past behind and move forward.",
            Love: "A misunderstanding is resolved and the chance for reconciliation arises. You are ready for a new love.",
            Money: "A way to recover from losses is visible. Accept the help that is being offered to you.",
            Career: "You rise above failure. The mistakes of the past become valuable lessons that make you stronger."
        }
    },
    {
        name: "Six of Cups",
        img: "images/cups06.jpg",
        meanings: {
            종합: "과거의 인연이나 추억이 힘이 되는 시기입니다. 순수함을 되찾으세요.",
            연애: "옛 연인에게 연락이 오거나, 오래 알고 지낸 사이와 사랑이 싹틉니다.",
            금전: "과거에 투자했던 곳에서 이득이 오거나, 지인에게 선물을 받게 됩니다.",
            학업: "예전에 배웠던 내용이 큰 도움이 됩니다. 기초를 복습하기 좋은 때입니다."
        },
        meanings_rev: {
            종합: "과거에 너무 얽매여 현실을 놓치고 있습니다. 이제는 현재를 살아야 합니다.",
            연애: "지나간 연인에 대한 미련 때문에 새로운 인연을 보지 못하고 있습니다.",
            금전: "추억에 호소하는 사기나 무의미한 지출을 주의하세요. 현실적인 감각이 필요합니다.",
            학업: "옛날 방식만 고집하다 성적이 정체됩니다. 최신 경향에 맞는 공부가 필요합니다."
        },
        meanings_en: {
            General: "Past connections and memories give you strength now. Reconnect with your sense of innocence.",
            Love: "An ex-lover may reach out, or a long-known friendship quietly blossoms into love.",
            Money: "A past investment pays off, or a familiar acquaintance gives you a welcome gift.",
            Career: "Previously learned material proves tremendously helpful. This is an excellent time to review fundamentals."
        },
        meanings_rev_en: {
            General: "You are clinging too tightly to the past and losing sight of the present. You must learn to live now.",
            Love: "Nostalgia for a past lover is preventing you from seeing the new connections in front of you.",
            Money: "Beware of sentimental scams or pointless nostalgic spending. A practical mindset is needed.",
            Career: "Clinging to old methods is causing your performance to plateau. Study the latest trends and approaches."
        }
    },
    {
        name: "Seven of Cups",
        img: "images/cups07.jpg",
        meanings: {
            종합: "선택지가 너무 많아 혼란스러운 시기입니다. 상상보다 현실적인 판단이 필요합니다.",
            연애: "환상적인 연애를 꿈꾸지만 실속이 없을 수 있습니다. 상대를 객관적으로 보세요.",
            금전: "화려한 수익률에 현혹되기 쉽습니다. 실체가 없는 투자 제안을 경계하세요.",
            학업: "하고 싶은 공부는 많지만 계획이 없습니다. 우선순위를 정해 하나씩 하세요."
        },
        meanings_rev: {
            종합: "혼란이 끝나고 현실적인 목표가 정해집니다. 막연한 꿈에서 깨어날 때입니다.",
            연애: "상대의 실체를 깨닫고 현실적인 관계를 정립합니다. 허황된 기대는 버리게 됩니다.",
            금전: "불확실한 투자에서 손을 떼고 안전한 곳을 찾습니다. 재무 계획이 명확해집니다.",
            학업: "막연한 포부 대신 구체적인 학습량을 정해 실천합니다. 집중력이 좋아집니다."
        },
        meanings_en: {
            General: "Too many choices are creating confusion. Practical judgment is more valuable than daydreaming.",
            Love: "You are fantasizing about a perfect romance, but the reality may fall short. See your partner clearly.",
            Money: "Dazzling returns are easy to be seduced by. Be very wary of investment proposals that lack substance.",
            Career: "Many subjects interest you but there is no plan. Set your priorities and tackle them one at a time."
        },
        meanings_rev_en: {
            General: "The confusion lifts and a realistic goal is set. It is time to wake from idle dreams.",
            Love: "You see your partner's true nature and establish a realistic relationship. Inflated expectations fade.",
            Money: "You step back from uncertain investments and seek a safer option. Your financial plan becomes clear.",
            Career: "Instead of vague ambitions, you commit to specific, measurable study goals. Focus greatly improves."
        }
    },
    {
        name: "Eight of Cups",
        img: "images/cups08.jpg",
        meanings: {
            종합: "익숙한 곳을 떠나 새로운 길을 찾는 시기입니다. 감정적 정리가 필요합니다.",
            연애: "관계를 정리하거나 잠시 거리를 두게 됩니다. 더 나은 자아를 위한 선택입니다.",
            금전: "수익이 나던 곳이라도 미련 없이 떠나야 할 수 있습니다. 새로운 투자를 준비하세요.",
            학업: "공부 방식을 완전히 바꾸거나 진로를 변경할 수 있습니다. 과감한 결단이 따릅니다."
        },
        meanings_rev: {
            종합: "떠나지 못하고 제자리에 머물러 있습니다. 포기해야 할 것을 잡고 있지는 않나요?",
            연애: "헤어지지 못하고 나쁜 관계를 이어갑니다. 결단력이 부족한 상태입니다.",
            금전: "손해 보는 곳에서 발을 빼지 못해 지출이 계속됩니다. 미련을 버려야 합니다.",
            학업: "맞지 않는 공부를 억지로 붙들고 있습니다. 변화를 두려워하지 마세요."
        },
        meanings_en: {
            General: "It is time to leave the familiar behind and seek a new path. Emotional closure is essential.",
            Love: "A relationship ends or distance is created. This is a choice made for a better version of yourself.",
            Money: "Even a previously profitable venture may need to be left behind. Prepare for a new investment path.",
            Career: "A complete change in study method or even a career pivot may occur. A bold decision follows."
        },
        meanings_rev_en: {
            General: "You cannot bring yourself to leave and remain stuck in place. Are you holding on to something you should release?",
            Love: "You cannot end a harmful relationship and continue it limply. You lack the resolve to act.",
            Money: "Inability to exit a losing situation means expenses keep accumulating. Let go of the attachment.",
            Career: "You are forcing yourself to continue with a study path that doesn't fit. Don't fear change."
        }
    },
    {
        name: "Nine of Cups",
        img: "images/cups09.jpg",
        meanings: {
            종합: "소원이 이루어지는 만족스러운 시기입니다. 스스로를 대견하게 여겨도 좋습니다.",
            연애: "꿈꾸던 연애가 현실이 됩니다. 연인과의 관계에서 큰 행복을 느낍니다.",
            금전: "금전적으로 매우 풍족해집니다. 갖고 싶던 것을 사거나 여유를 즐길 운입니다.",
            학업: "목표했던 성적을 거두어 만족감이 큽니다. 자신감이 충만한 상태입니다."
        },
        meanings_rev: {
            종합: "지나친 자만이나 탐욕이 화를 부를 수 있습니다. 겉만 번지르르한 상태입니다.",
            연애: "자신의 만족만 생각하다 상대를 소홀히 할 수 있습니다. 배려심이 필요합니다.",
            금전: "돈이 있어도 마음이 허전하거나 낭비가 심해집니다. 내실을 다스리세요.",
            학업: "성적에 자만하여 다음 시험을 소홀히 할 수 있습니다. 겸손하게 유지하세요."
        },
        meanings_en: {
            General: "A deeply satisfying time when wishes come true. You have every right to feel proud of yourself.",
            Love: "The romance you have been dreaming of becomes reality. Your relationship brings tremendous joy.",
            Money: "You become financially very comfortable. The time to buy what you desired or enjoy real luxury arrives.",
            Career: "You achieve the grades you aimed for and feel great personal satisfaction. Confidence is overflowing."
        },
        meanings_rev_en: {
            General: "Overconfidence or excessive greed may invite trouble. Things may be shinier on the outside than within.",
            Love: "Focusing only on your own satisfaction may cause you to neglect your partner. More consideration is needed.",
            Money: "Money is present yet the heart feels empty, or reckless spending is becoming a problem. Build inner richness.",
            Career: "Pride in your grades may lead to taking the next test too lightly. Stay humble and consistent."
        }
    },
    {
        name: "Ten of Cups",
        img: "images/cups10.jpg",
        meanings: {
            종합: "완벽한 행복과 조화가 함께합니다. 가정과 주변 사람들과 화목한 시기입니다.",
            연애: "결혼이나 동거 등 관계의 정점에 도달합니다. 더할 나위 없이 행복한 사랑입니다.",
            금전: "안정적인 수입과 풍요로움이 지속됩니다. 공동 자산을 관리하기에 좋습니다.",
            학업: "주변의 축복 속에서 공부에 매진합니다. 모든 상황이 당신을 도와줍니다."
        },
        meanings_rev: {
            종합: "가정 불화나 인간관계의 불협화음이 생길 수 있습니다. 대화로 풀어야 합니다.",
            연애: "겉으로는 행복해 보이나 속은 곪아있을 수 있습니다. 진실한 소통이 필요합니다.",
            금전: "금전 문제로 가족과 다툴 수 있습니다. 투명한 자금 관리가 필요합니다.",
            학업: "주변 환경이 어수선해 공부에 집중하기 어렵습니다. 평정심을 유지하세요."
        },
        meanings_en: {
            General: "Perfect happiness and harmony are yours. A time of warmth and harmony with family and loved ones.",
            Love: "The relationship reaches its pinnacle—marriage or cohabitation. An incomparably happy love.",
            Money: "Stable income and abundance persist comfortably. Managing shared assets is especially favorable.",
            Career: "Surrounded by the blessings of others, you devote yourself fully to your studies. Everything supports you."
        },
        meanings_rev_en: {
            General: "Family discord or interpersonal friction may arise. Work it out through honest conversation.",
            Love: "The relationship may appear happy on the outside while quietly deteriorating within. Genuine communication is vital.",
            Money: "Money disagreements may cause family conflict. Transparent financial management is essential.",
            Career: "A chaotic home environment is making it difficult to concentrate. Maintain your calm."
        }
    },
    {
        name: "Page of Cups",
        img: "images/cups11.jpg",
        meanings: {
            종합: "순수하고 감수성 어린 소식이 찾아옵니다. 새로운 창의력이 솟아납니다.",
            연애: "수줍고 풋풋한 사랑의 시작입니다. 정성 어린 편지나 연락이 오게 됩니다.",
            금전: "예술적인 일에서 소소한 이득이 생깁니다. 직관을 따라 소액 투자를 해보세요.",
            학업: "새로운 영감이 떠올라 공부가 즐거워집니다. 호기심을 따라가 보세요."
        },
        meanings_rev: {
            종합: "감정 기복이 심해지고 유치하게 행동할 수 있습니다. 마음의 안정이 필요합니다.",
            연애: "상처받기 쉬운 상태입니다. 짝사랑에 너무 깊이 빠져 실망할 수 있습니다.",
            금전: "기분에 따라 무계획적인 지출을 하기 쉽습니다. 지갑을 단속하세요.",
            학업: "상상력만 풍부하고 실천력이 부족합니다. 현실적인 학습량을 채우세요."
        },
        meanings_en: {
            General: "Pure and tender-hearted news arrives. Fresh creative energy is springing up within you.",
            Love: "A shy and innocent love is beginning. A heartfelt letter or meaningful message is coming your way.",
            Money: "Small financial gains emerge from artistic pursuits. Trust your intuition for small investments.",
            Career: "A new burst of inspiration makes studying genuinely enjoyable. Follow your curiosity wherever it leads."
        },
        meanings_rev_en: {
            General: "Emotional ups and downs intensify and immature behavior may emerge. Inner stability is needed.",
            Love: "You are in a fragile emotional state. Diving too deep into unrequited love risks real disappointment.",
            Money: "Unplanned, mood-driven spending is easy to fall into. Keep a close watch on your wallet.",
            Career: "Imagination runs wild but follow-through is lacking. Commit to a realistic daily study target."
        }
    },
    {
        name: "Knight of Cups",
        img: "images/cups12.jpg",
        meanings: {
            종합: "낭만적인 제안과 기회가 찾아옵니다. 당신의 마음을 움직일 일이 생깁니다.",
            연애: "꿈에 그리던 이상형이 나타나거나 프로포즈를 받게 됩니다. 로맨틱한 시기입니다.",
            금전: "좋은 조건의 제안이 들어옵니다. 사람과의 관계를 통해 수익이 생깁니다.",
            학업: "좋아하는 선생님이나 멘토를 만나 동기부여를 받습니다. 인문학적 공부에 좋습니다."
        },
        meanings_rev: {
            종합: "겉모습만 화려한 제안일 수 있습니다. 감언이설에 속지 않도록 주의하세요.",
            연애: "바람둥이 기질이 있는 사람을 조심하세요. 진심이 아닐 가능성이 있습니다.",
            금전: "사람을 너무 믿다가 금전적 손해를 볼 수 있습니다. 계약서는 꼼꼼히 보세요.",
            학업: "공부보다 연애나 친구 관계에 빠지기 쉽습니다. 균형을 잡아야 합니다."
        },
        meanings_en: {
            General: "A romantic proposal or exciting opportunity arrives. Something will truly move your heart.",
            Love: "Your dream type appears, or a proposal comes your way. A deeply romantic time is here.",
            Money: "A highly attractive offer comes in. Relationships with people become a source of income.",
            Career: "You encounter an inspiring teacher or mentor who motivates you. Humanities subjects flourish."
        },
        meanings_rev_en: {
            General: "The offer may be all surface and no substance. Be careful not to be swept away by sweet words.",
            Love: "Be cautious of someone with a flirtatious or fickle nature. Their sincerity may be in question.",
            Money: "Trusting others too readily may result in financial loss. Read every contract very carefully.",
            Career: "Romance or social life is distracting you from study more than study itself. Find the right balance."
        }
    },
    {
        name: "Queen of Cups",
        img: "images/cups13.jpg",
        meanings: {
            종합: "자애롭고 직관력이 뛰어난 시기입니다. 주변 사람들을 포용하는 힘이 생깁니다.",
            연애: "깊이 이해하고 공감하는 따뜻한 사랑입니다. 당신의 헌신이 빛을 발합니다.",
            금전: "직관적인 투자가 성공할 확률이 높습니다. 차분하게 자금을 관리하세요.",
            학업: "차분한 상태에서 집중력이 발휘됩니다. 심리학이나 예술 공부에 아주 길합니다."
        },
        meanings_rev: {
            종합: "지나치게 감상적이거나 변덕스러워질 수 있습니다. 현실을 직시하세요.",
            연애: "의존적인 태도가 관계를 망칠 수 있습니다. 자신의 마음부터 단단히 하세요.",
            금전: "감정에 휩쓸려 큰돈을 빌려주거나 보증을 설 위험이 있습니다. 냉정해지세요.",
            학업: "감정 조절에 실패해 공부 흐름이 완전히 깨집니다. 멘탈 관리가 급선무입니다."
        },
        meanings_en: {
            General: "A compassionate and highly intuitive period. The power to embrace those around you grows.",
            Love: "A deeply understanding and empathetic love. Your devotion and warmth are truly shining.",
            Money: "Intuitive investment decisions are likely to succeed. Manage finances calmly and patiently.",
            Career: "Concentration comes most easily when you are calm. Psychology and arts subjects are especially favored."
        },
        meanings_rev_en: {
            General: "You may become overly sentimental or unpredictable. Try to face reality more directly.",
            Love: "An overly dependent attitude could damage the relationship. Strengthen your own emotional core first.",
            Money: "The risk of lending large sums or co-signing out of sentiment is real. Stay rational.",
            Career: "Losing control of your emotions completely disrupts your study flow. Mental management is the top priority."
        }
    },
    {
        name: "King of Cups",
        img: "images/cups14.jpg",
        meanings: {
            종합: "감정과 이성의 균형을 완벽히 잡은 지도자입니다. 신뢰받는 조언자가 됩니다.",
            연애: "듬직하고 포용력 있는 사랑입니다. 안정적이고 성숙한 관계가 지속됩니다.",
            금전: "풍부한 경험을 바탕으로 안정적인 자산 운영을 합니다. 큰 수익보다 유지가 강점입니다.",
            학업: "학습 목표를 평온하게 달성합니다. 상담이나 교육 관련 시험에 아주 유리합니다."
        },
        meanings_rev: {
            종합: "교활하거나 감정을 조종하려 할 수 있습니다. 겉으로만 착한 척하는 사람을 주의하세요.",
            연애: "가스라이팅이나 감정적인 갑질이 생길 수 있습니다. 건강한 거리를 두세요.",
            금전: "금전적인 부패나 부정한 제안에 휘말릴 수 있습니다. 청렴함을 유지하세요.",
            학업: "지식은 많으나 방향을 잃었습니다. 자만하지 말고 겸손하게 다시 시작하세요."
        },
        meanings_en: {
            General: "A leader with a perfect balance of emotion and reason. You become a trusted and respected advisor.",
            Love: "A steady and deeply understanding love. The relationship continues in a stable, mature way.",
            Money: "Vast experience enables stable and secure asset management. Sustaining gains is your greatest strength.",
            Career: "Learning goals are achieved with a calm and steady mind. Counseling and education exams are very favorable."
        },
        meanings_rev_en: {
            General: "You may be acting manipulatively or trying to control others emotionally. Watch for people who appear kind but aren't.",
            Love: "Emotional manipulation or relationship power imbalances may occur. Establish a healthy distance.",
            Money: "You may be drawn into financially corrupt or dishonest proposals. Maintain your integrity.",
            Career: "Knowledge is vast but the direction is lost. Avoid arrogance and begin again with humility."
        }
    }
];
