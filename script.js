/**
 * 대한민국 법제처 소개 웹 앱 JavaScript
 * 외부 라이브러리 및 서버 통신 없이 순수 Vanilla JS로 로컬 브라우저에서 즉각 동작
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. 모바일 햄버거 메뉴 토글
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // 메뉴 항목 클릭 시 모바일 메뉴 자동 닫힘
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 2. 주요 업무 탭 전환 인터랙션
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab');

      // 탭 활성화 상태 변경
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 탭 콘텐츠 표시 변경
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === targetId) {
          content.classList.add('active');
        }
      });
    });
  });

  // 3. 국민 체감 인터랙티브 시뮬레이터 (페르소나별 혜택 데이터)
  const personaData = {
    business: {
      avatar: '👨‍🍳',
      title: '소상공인 및 자영업자',
      subtitle: '경미한 행정처분 유예 및 불합리한 시설·인증 규제 대폭 정비',
      benefits: [
        {
          title: '경미한 위반 시 영업정지 유예 및 감경',
          desc: '청소년 신분증 위·변조에 속아 주류를 판매한 선량한 소상공인 등에 대해 행정처분 기준을 합리적으로 완화하고 면책 규정을 확대했습니다.'
        },
        {
          title: '불필요한 보수교육 이수 부담 완화',
          desc: '생업에 바쁜 소상공인이 불필요한 집합교육으로 영업 손실을 보지 않도록 온라인 교육 대체 및 이수 주기를 현실화했습니다.'
        },
        {
          title: '숨은 규제 및 인증 요건 혁신',
          desc: '연구소 설립이나 창업 시 지나치게 엄격했던 고정벽체 분리 규정 등을 개선하여 사무공간 유연성을 보장하고 창업 비용을 절감시켰습니다.'
        },
        {
          title: '알기 쉬운 법령으로 과태료 기준 명확화',
          desc: '영업 관련 규제 법령의 문장을 국민 눈높이에 맞춰 쉽게 고쳐 불의의 법 위반을 사전에 예방합니다.'
        }
      ]
    },
    youth: {
      avatar: '🎓',
      title: '청년 및 취업준비생',
      subtitle: '공정한 기회 보장과 자격 취득 실무경력 인정 범위 확대',
      benefits: [
        {
          title: '각종 국가전문자격 응시·취득 기준 합리화',
          desc: '군 복무 경력, 인턴십, 프리랜서 등 다양한 청년의 사회 실무 경험이 공인자격 실무경력으로 폭넓게 인정받도록 법령을 정비했습니다.'
        },
        {
          title: '학교 밖 청소년 지원 근거 법제화',
          desc: '정규 학교에 다니지 않는 청소년도 동등한 교육·취업 지원 혜택을 누릴 수 있도록 관련 법률 체계를 정비했습니다.'
        },
        {
          title: '청년 리걸테크(LegalTech) 창업 지원',
          desc: '국가법령 빅데이터를 전면 개방하여 청년 스타트업이 AI 법률 서비스를 자유롭게 개발하고 창업할 수 있도록 지원합니다.'
        },
        {
          title: '학력·경력에 의한 불합리한 차별 요소 철폐',
          desc: '자격증 응시요건 등에서 시대착오적인 학벌 제한 요소를 걷어내고 실무 능력 중심으로 도전할 수 있도록 법제를 개정했습니다.'
        }
      ]
    },
    consumer: {
      avatar: '🛒',
      title: '일반 소비자 및 직장인',
      subtitle: '만 나이 통일, 헬스장 먹튀 방지, 일상 안전 지킴이',
      benefits: [
        {
          title: '전 국민 "만 나이" 통일법 시행',
          desc: '세는 나이, 연 나이 등으로 인한 사회적·행정적 혼란을 없애고 글로벌 표준에 맞게 일상 연령을 만 나이로 단일화했습니다.'
        },
        {
          title: '체육시설·헬스장 장기 휴폐업 14일 전 통보 의무화',
          desc: '이른바 헬스장 ‘먹튀’로 인한 소비자 피해를 방지하기 위해 1개월 이상 장기 휴폐업 시 이용자에게 사전 통보하도록 시행령을 정비했습니다.'
        },
        {
          title: '음주운전 후 "술타기" 행위 엄단 법제화',
          desc: '음주운전 후 측정을 방해하기 위해 고의로 술을 추가로 마시는 행위를 형사 처벌하도록 교통 법령 체계를 보완했습니다.'
        },
        {
          title: '수영장·헬스장 이용료 소득공제 확대',
          desc: '총급여 7천만 원 이하 직장인을 대상으로 체육시설 이용료에 대한 신용카드 소득공제 적용 기반을 입법 지원했습니다.'
        }
      ]
    },
    local: {
      avatar: '🏡',
      title: '지방자치단체 및 지역 주민',
      subtitle: '지방시대 구현을 위한 조례 입안 지원 및 자치입법권 확대',
      benefits: [
        {
          title: '지자체 맞춤형 자치법규 입안 컨설팅',
          desc: '지역별 현안 조례가 상위법령과 충돌하지 않고 실질적 효과를 낼 수 있도록 법제처 전문 인력이 밀착 자문합니다.'
        },
        {
          title: '중앙행정 권한의 포괄적 지방 이양 지원',
          desc: '중앙부처 권한을 지방자치단체에 넘기는 법안들을 일괄 개정하여 지역 주도의 균형발전을 법적으로 뒷받침합니다.'
        },
        {
          title: '지역 주민 대상 찾기 쉬운 자치법규 서비스',
          desc: '우리 동네 조례, 규칙을 국가법령정보센터에서 법률과 함께 한눈에 찾아보고 비교할 수 있습니다.'
        },
        {
          title: '지방소멸 위기 대응 특례 지원',
          desc: '인구감소지역을 위한 정주여건 개선과 산업 육성에 필요한 자치법제 특례를 신속히 도입할 수 있도록 돕습니다.'
        }
      ]
    }
  };

  function renderPersona(type) {
    const data = personaData[type];
    const container = document.getElementById('personaResult');
    if (!data || !container) return;

    let html = `
      <div class="persona-header">
        <div class="persona-avatar">${data.avatar}</div>
        <div class="persona-title">
          <h3>${data.title} 맞춤 혜택</h3>
          <p>${data.subtitle}</p>
        </div>
      </div>
      <div class="persona-body-grid">
    `;

    data.benefits.forEach(b => {
      html += `
        <div class="benefit-box">
          <h4>💡 ${b.title}</h4>
          <p>${b.desc}</p>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  // 초기 페르소나 렌더링
  renderPersona('business');

  // 페르소나 버튼 클릭 이벤트
  const personaButtons = document.querySelectorAll('.persona-btn');
  personaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      personaButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-target');
      renderPersona(target);
    });
  });

  // 3-1. 대국민 맞춤 지원 체크리스트 & 설문 (Help Finder)
  const helpSolutionsData = {
    dispute_interpret: {
      tag: '법령해석 지원',
      title: '법제처 법령해석 요청 (정부유권해석)',
      desc: '행정기관의 법령 집행 과정에서 불합리하거나 모호한 법 조항 해석으로 억울한 처분을 받을 위기일 때, 법제처 법령해석심의위원회를 통해 객관적인 유권해석을 신청할 수 있습니다.',
      tip: '💡 팁: 해당 법령의 소관 중앙행정기관에 먼저 1차 질의 회신을 받은 후, 해석에 이견이 있을 때 국민참여입법센터를 통해 법제처에 법령해석을 정식 요청하실 수 있습니다.',
      actionText: '국민참여입법센터 법령해석 신청 바로가기 ↗',
      actionUrl: 'https://opinion.lawmaking.go.kr'
    },
    unreasonable_rule: {
      tag: '불합리 규제 정비',
      title: '국민 불편법령 신고 & 입법 아이디어 제안',
      desc: '자영업 영업, 자격 취득, 건축, 금융 등 일상 속에서 시대착오적이거나 국민에게 과도한 부담을 주는 법률·시행령 조항을 발견하셨다면 직접 개선을 건의하세요.',
      tip: '💡 팁: 법제처는 국민이 신고한 불편 법령을 관계 부처와 적극 협의하여 실제 법령 개정 및 폐지 과제로 반영합니다.',
      actionText: '불편법령 개선 신고하기 ↗',
      actionUrl: 'https://opinion.lawmaking.go.kr'
    },
    new_law_opinion: {
      tag: '입법 참여',
      title: '통합입법예고 국민의견 수렴',
      desc: '모든 정부 부처가 만드는 법률안, 대통령령안, 시행규칙안이 국무회의를 거쳐 확정되기 전 국민에게 공개되는 입법예고 기간에 찬성·반대 또는 수정 의견을 제출할 수 있습니다.',
      tip: '💡 팁: 통합입법예고 시스템에서 현재 입법 진행 중인 모든 정부 법안의 원문과 조문별 이유서를 열람하고 댓글식으로 의견을 낼 수 있습니다.',
      actionText: '진행 중인 입법예고 보기 ↗',
      actionUrl: 'https://opinion.lawmaking.go.kr'
    },
    daily_law_info: {
      tag: '생활법령',
      title: '찾기 쉬운 생활법령정보 (easylaw.go.kr)',
      desc: '임대차 계약, 부동산 거래, 임금 체불, 층간소음, 소상공인 창업, 상속 등 200여 개 국민 생활 분야별로 어려운 법 조문 대신 Q&A와 일상어로 정리된 법률 솔루션을 제공합니다.',
      tip: '💡 팁: 카드뉴스, 인포그래픽, 100문 100답 형태로 구성되어 있어 비전문가도 한눈에 자기 권리를 파악할 수 있습니다.',
      actionText: '생활법령정보 바로가기 ↗',
      actionUrl: 'https://easylaw.go.kr'
    },
    search_law_data: {
      tag: '국가 법률 빅데이터',
      title: '국가법령정보센터 & AI 법령검색 (law.go.kr)',
      desc: '대한민국 모든 현행 법률, 시행령, 규칙, 조례, 대법원/헌재 판례, 행정규칙을 하나의 검색창에서 무료로 열람하고 다운로드할 수 있습니다.',
      tip: '💡 팁: 최근 도입된 대화형 AI 법령검색을 통해 법 조문 번호를 몰라도 "카페 테라스 영업 규정", "전세보증금 반환 기준" 등 평소 말로 검색할 수 있습니다.',
      actionText: '국가법령정보센터 열기 ↗',
      actionUrl: 'https://www.law.go.kr'
    },
    local_counsel: {
      tag: '자치법규 지원',
      title: '지자체 자치법규 입안 컨설팅 & 조례 검색',
      desc: '우리 동네 시·군·구 조례나 교육규칙을 쉽게 검색하고, 지자체 입법 실무자나 주민 발의 조례가 상위법과 부딪히지 않도록 법제처 전문가의 입안 상담을 지원받을 수 있습니다.',
      tip: '💡 팁: 국가법령정보센터의 [자치법규] 탭에서 전국 243개 지자체의 조례·규칙 제정 및 개정 이력을 실시간 비교할 수 있습니다.',
      actionText: '전국 자치법규 검색 ↗',
      actionUrl: 'https://www.law.go.kr'
    }
  };

  const findSolutionBtn = document.getElementById('findSolutionBtn');
  const resetChecklistBtn = document.getElementById('resetChecklistBtn');
  const finderResultPanel = document.getElementById('finderResultPanel');
  const solutionCardsContainer = document.getElementById('solutionCardsContainer');

  if (findSolutionBtn && finderResultPanel && solutionCardsContainer) {
    findSolutionBtn.addEventListener('click', () => {
      const checkedInputs = document.querySelectorAll('input[name="help_need"]:checked');
      const selectedValues = Array.from(checkedInputs).map(cb => cb.value);

      if (selectedValues.length === 0) {
        alert('상황이나 고민 사항을 최소 1개 이상 체크해 주세요!');
        return;
      }

      let resultHtml = '';
      selectedValues.forEach(key => {
        const item = helpSolutionsData[key];
        if (item) {
          resultHtml += `
            <div class="solution-item-card">
              <div class="solution-info">
                <span class="solution-tag">${item.tag}</span>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <div class="solution-tip">${item.tip}</div>
              </div>
              <div class="solution-cta">
                <a href="${item.actionUrl}" target="_blank" rel="noopener noreferrer" class="solution-btn">
                  ${item.actionText}
                </a>
              </div>
            </div>
          `;
        }
      });

      solutionCardsContainer.innerHTML = resultHtml;
      finderResultPanel.style.display = 'block';

      // 결과 영역으로 부드럽게 스크롤
      finderResultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener('click', () => {
      const checkedInputs = document.querySelectorAll('input[name="help_need"]:checked');
      checkedInputs.forEach(cb => cb.checked = false);
      if (finderResultPanel) {
        finderResultPanel.style.display = 'none';
      }
    });
  }

  // 4. 최신 뉴스 기사 및 공식 보도자료 데이터
  const newsList = [
    {
      category: 'official',
      categoryName: '공식 보도',
      date: '법제처 공식 누리집',
      title: '법제처 주요 업무추진계획: 민생 안정을 위한 선제적 정부입법',
      desc: '민생 경제 활력 제고, 소상공인 부담 완화, 그리고 인공지능(AI) 기반 미래 입법 지원체계 구축을 위한 법제처의 핵심 추진 전략을 발표했습니다.',
      url: 'https://www.moleg.go.kr/_kor/bbs/list.do?bbsId=BBSMSTR_000000000006&menuId=OOP0030101',
      source: '법제처 보도자료'
    },
    {
      category: 'life',
      categoryName: '생활밀착 법령',
      date: '대한민국 정책브리핑',
      title: '2025년부터 새로워지는 국민 생활 밀접 시행법령 총정리',
      desc: '전기차 배터리 화재 안전 기준 강화, 체육시설 장기 휴폐업 시 14일 전 통보 의무화, 헬스장·수영장 소득공제 등 새롭게 시행되는 국민 일상 법령 안내입니다.',
      url: 'https://www.korea.kr',
      source: '정책브리핑 (korea.kr)'
    },
    {
      category: 'reform',
      categoryName: '규제개혁·AI',
      date: '국가법령정보센터',
      title: '전문 법률용어 몰라도 일상어로 찾는다! 지능형 AI 법령검색 고도화',
      desc: '국가법령정보센터에서 복잡한 법률 조문을 모르는 일반 국민도 대화형 일상어로 쉽게 찾을 수 있는 AI 기반 지능형 법령정보 서비스 제공.',
      url: 'https://www.law.go.kr',
      source: '국가법령정보센터'
    },
    {
      category: 'official',
      categoryName: '공식 보도',
      date: '법제처 소식',
      title: '자치법규 입안 종합안내서 발간: 지자체 입법역량 강화 밀착 지원',
      desc: '지방자치단체가 지역 주민 복리와 지역 경제 활성화를 위한 조례를 상위법 위반 없이 원활하게 제정·개정할 수 있도록 실무 종합안내서를 배포했습니다.',
      url: 'https://www.moleg.go.kr',
      source: '법제처 공식 누리집'
    },
    {
      category: 'reform',
      categoryName: '규제개혁·AI',
      date: '법제처 규제혁신',
      title: '소상공인·청년 경제활동 발목 잡는 하위법령 규제 100여 건 정비',
      desc: '청년 창업자의 불필요한 시설인증 요건 완화 및 소상공인 경미한 법 위반에 대한 과도한 행정처분 기준을 선제적으로 감경·개선했습니다.',
      url: 'https://www.korea.kr',
      source: '대한민국 정책브리핑'
    },
    {
      category: 'life',
      categoryName: '생활밀착 법령',
      date: '생활법령정보',
      title: '음주운전 후 "술타기" 행위 방지 및 엄단 법률 개정 시행',
      desc: '음주운전 적발 직후 추가로 술을 마셔 혈중알코올농도 측정을 방해하는 편법 행위를 처벌하는 도로교통 관련 규정이 본격 시행되었습니다.',
      url: 'https://easylaw.go.kr',
      source: '찾기 쉬운 생활법령정보'
    }
  ];

  function renderNews(filter = 'all') {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer) return;

    const filtered = filter === 'all' ? newsList : newsList.filter(item => item.category === filter);

    let html = '';
    filtered.forEach(item => {
      html += `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="news-card">
          <div>
            <div class="news-header-meta">
              <span class="news-category ${item.category}">${item.categoryName}</span>
              <span class="news-date">${item.date}</span>
            </div>
            <h4 class="news-title">${item.title}</h4>
            <p class="news-desc">${item.desc}</p>
          </div>
          <div class="news-footer-link">
            <span>출처: ${item.source}</span>
            <span>원문 바로가기 ↗</span>
          </div>
        </a>
      `;
    });

    newsContainer.innerHTML = html;
  }

  // 초기 뉴스 렌더링
  renderNews('all');

  // 뉴스 필터 버튼 이벤트
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderNews(filter);
    });
  });

  // 5. 법제처 상식 퀴즈 인터랙션
  const quizData = [
    {
      question: 'Q1. 법제처는 대한민국 정부 조직에서 어느 기관 소속일까요?',
      options: [
        '대법원 소속',
        '국무총리 직속',
        '국회(입법부) 소속',
        '헌법재판소 소속'
      ],
      answer: 1, // 0-based: 1번째는 국무총리 직속
      explanation: '정답입니다! 👏 법제처는 국무총리 직속의 중앙행정기관으로, 정부의 입법활동을 총괄하고 조정합니다.'
    },
    {
      question: 'Q2. 대한민국 모든 법령, 조례, 판례를 국민 누구나 무료로 검색할 수 있는 법제처의 대국민 사이트 이름은?',
      options: [
        '국가법령정보센터 (law.go.kr)',
        '대한민국 법원 인터넷등기소',
        '정부24 민원포털',
        '나라장터 전자조달'
      ],
      answer: 0,
      explanation: '정답입니다! 🎯 국가법령정보센터(law.go.kr)는 약 5,500개 현행 법령과 14만여 개 자치법규, 판례를 통합 제공하는 세계적 수준의 법률정보 포털입니다.'
    },
    {
      question: 'Q3. 법제처에서 추진한 국민 생활 밀착형 대표 제도 혁신 중, 연령 계산 혼선을 해소한 제도는?',
      options: [
        '주 4일 근무제',
        '만 나이 통일법 시행',
        '주민등록번호 폐지법',
        '청년 기본소득법'
      ],
      answer: 1,
      explanation: '정답입니다! 🎉 법제처는 ‘세는 나이’, ‘연 나이’ 등 다양한 나이 계산법으로 인한 사회적 혼선을 해소하기 위해 2023년부터 ‘만 나이 통일법’을 본격 시행했습니다.'
    }
  ];

  let currentQuizIndex = 0;
  const quizCard = document.getElementById('quizCard');
  const quizProgress = document.getElementById('quizProgress');
  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const quizFeedback = document.getElementById('quizFeedback');
  const nextQuizBtn = document.getElementById('nextQuizBtn');

  function loadQuiz(index) {
    if (!quizQuestion) return;
    const q = quizData[index];
    quizProgress.textContent = `문제 ${index + 1} / ${quizData.length}`;
    quizQuestion.textContent = q.question;
    quizFeedback.style.display = 'none';
    quizFeedback.className = 'quiz-feedback';
    nextQuizBtn.style.display = 'none';

    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
      optionsHtml += `<button class="option-btn" data-index="${idx}">${opt}</button>`;
    });
    quizOptions.innerHTML = optionsHtml;

    // 옵션 클릭 리스너 연결
    quizOptions.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedIdx = parseInt(e.target.getAttribute('data-index'));
        checkAnswer(selectedIdx, q.answer, q.explanation);
      });
    });
  }

  function checkAnswer(selected, correct, explanation) {
    const buttons = quizOptions.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correct) {
        btn.classList.add('correct');
      } else if (idx === selected) {
        btn.classList.add('wrong');
      }
    });

    if (selected === correct) {
      quizFeedback.className = 'quiz-feedback correct-box';
      quizFeedback.innerHTML = `<strong>정답입니다! ✨</strong><br>${explanation}`;
    } else {
      quizFeedback.className = 'quiz-feedback wrong-box';
      quizFeedback.innerHTML = `<strong>아쉽네요! 다시 확인해보세요.</strong><br>${explanation}`;
    }
    quizFeedback.style.display = 'block';

    if (currentQuizIndex < quizData.length - 1) {
      nextQuizBtn.textContent = '다음 문제 풀기 ➡️';
      nextQuizBtn.style.display = 'block';
    } else {
      nextQuizBtn.textContent = '처음부터 다시 풀어보기 🔄';
      nextQuizBtn.style.display = 'block';
    }
  }

  if (nextQuizBtn) {
    nextQuizBtn.addEventListener('click', () => {
      if (currentQuizIndex < quizData.length - 1) {
        currentQuizIndex++;
      } else {
        currentQuizIndex = 0;
      }
      loadQuiz(currentQuizIndex);
    });
  }

  // 초기 퀴즈 로드
  loadQuiz(0);

});
