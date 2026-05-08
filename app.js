const STORAGE_KEYS = {
    users: "leaf_graphix_users",
    sessions: "leaf_graphix_sessions",
    goals: "leaf_graphix_goals",
    achievements: "leaf_graphix_achievements",
    posts: "leaf_graphix_posts",
    notifications: "leaf_graphix_notifications",
    adminReports: "leaf_graphix_admin_reports",
    currentUserId: "leaf_graphix_current_user"
};

const ADMIN_EMAIL = "leafgraphicdesinging@gmail.com";
const COMPANY = {
    name: "LEAF GRAPHIX",
    adminEmail: ADMIN_EMAIL,
    product: "Focus Hub",
    logo: "leafgraphix-logo.png"
};

const TIMER_MODES = {
    adhd: { id: "adhd", label: "10/3 ADHD", focusMinutes: 10, breakMinutes: 3 },
    classic: { id: "classic", label: "25/5 Classic", focusMinutes: 25, breakMinutes: 5 },
    deep: { id: "deep", label: "45/15 Deep", focusMinutes: 45, breakMinutes: 15 },
    custom: { id: "custom", label: "Custom", focusMinutes: 15, breakMinutes: 5 }
};

const DEFAULT_PRIVACY = {
    showStatsOnLeaderboard: false,
    showAchievementsInHallOfFame: true,
    allowMentionsInPosts: false
};

const DEFAULT_NOTIFICATION_PREFS = {
    soundEnabled: true,
    flashEnabled: true,
    ringtoneId: "focus-bell"
};

const DEFAULT_AI_PREFS = {
    mode: "focus",
    topic: "",
    introDismissed: false
};

const REACTION_TYPES = [
    { id: "fire", emoji: "🔥", label: "Fire" },
    { id: "muscle", emoji: "💪", label: "Muscle" },
    { id: "target", emoji: "🎯", label: "Target" }
];

const POST_TYPE_LABELS = {
    achievement: "Achievement Share",
    goal: "Goal Completion",
    stats: "Focus Stats"
};

const ONETHING_AI_MODES = {
    focus: {
        id: "focus",
        label: "Focus Coach",
        intro: "Reduce the next action to one clear move."
    },
    plan: {
        id: "plan",
        label: "Study Planner",
        intro: "Break a study block into calm, doable steps."
    },
    explain: {
        id: "explain",
        label: "Explain Builder",
        intro: "Turn your topic into a short explanation."
    },
    quiz: {
        id: "quiz",
        label: "Quiz Spark",
        intro: "Practice active recall instead of rereading."
    },
    reference: {
        id: "reference",
        label: "Reference Guide",
        intro: "Keep only the key facts and checkpoints visible."
    }
};

const ONETHING_AI_PRINCIPLES = [
    { id: "clarify", label: "Clarify" },
    { id: "chunk", label: "Break Down" },
    { id: "example", label: "Use Example" },
    { id: "check", label: "Check Understanding" }
];

const RINGTONE_LIBRARY = [
    {
        id: "focus-bell",
        name: "Focus Bell",
        notes: [
            { freq: 784, duration: 0.16, gap: 0.05, type: "sine", volume: 0.18 },
            { freq: 988, duration: 0.18, gap: 0.05, type: "sine", volume: 0.2 },
            { freq: 1318, duration: 0.32, gap: 0.06, type: "triangle", volume: 0.24 }
        ]
    },
    {
        id: "leaf-spark",
        name: "Leaf Spark",
        notes: [
            { freq: 659, duration: 0.12, gap: 0.04, type: "triangle", volume: 0.17 },
            { freq: 880, duration: 0.14, gap: 0.04, type: "triangle", volume: 0.19 },
            { freq: 1174, duration: 0.26, gap: 0.04, type: "sine", volume: 0.22 }
        ]
    },
    {
        id: "studio-pulse",
        name: "Studio Pulse",
        notes: [
            { freq: 523, duration: 0.14, gap: 0.03, type: "square", volume: 0.11 },
            { freq: 659, duration: 0.14, gap: 0.03, type: "square", volume: 0.11 },
            { freq: 988, duration: 0.3, gap: 0.06, type: "triangle", volume: 0.2 }
        ]
    },
    {
        id: "golden-chime",
        name: "Golden Chime",
        notes: [
            { freq: 880, duration: 0.24, gap: 0.06, type: "sine", volume: 0.18 },
            { freq: 1174, duration: 0.24, gap: 0.06, type: "sine", volume: 0.18 },
            { freq: 1568, duration: 0.36, gap: 0.08, type: "triangle", volume: 0.24 }
        ]
    },
    {
        id: "calm-orbit",
        name: "Calm Orbit",
        notes: [
            { freq: 440, duration: 0.22, gap: 0.05, type: "sine", volume: 0.14 },
            { freq: 554, duration: 0.22, gap: 0.05, type: "sine", volume: 0.14 },
            { freq: 659, duration: 0.28, gap: 0.05, type: "triangle", volume: 0.18 }
        ]
    },
    {
        id: "neon-drop",
        name: "Neon Drop",
        notes: [
            { freq: 988, duration: 0.1, gap: 0.03, type: "square", volume: 0.1 },
            { freq: 784, duration: 0.1, gap: 0.03, type: "square", volume: 0.1 },
            { freq: 523, duration: 0.28, gap: 0.05, type: "triangle", volume: 0.16 }
        ]
    },
    {
        id: "soft-bloom",
        name: "Soft Bloom",
        notes: [
            { freq: 587, duration: 0.18, gap: 0.05, type: "sine", volume: 0.14 },
            { freq: 698, duration: 0.18, gap: 0.05, type: "sine", volume: 0.14 },
            { freq: 880, duration: 0.28, gap: 0.05, type: "triangle", volume: 0.2 }
        ]
    },
    {
        id: "victory-ping",
        name: "Victory Ping",
        notes: [
            { freq: 659, duration: 0.1, gap: 0.03, type: "triangle", volume: 0.16 },
            { freq: 880, duration: 0.12, gap: 0.03, type: "triangle", volume: 0.17 },
            { freq: 1568, duration: 0.32, gap: 0.07, type: "sine", volume: 0.24 }
        ]
    },
    {
        id: "night-signal",
        name: "Night Signal",
        notes: [
            { freq: 392, duration: 0.2, gap: 0.05, type: "sawtooth", volume: 0.08 },
            { freq: 523, duration: 0.2, gap: 0.05, type: "sawtooth", volume: 0.08 },
            { freq: 784, duration: 0.26, gap: 0.06, type: "triangle", volume: 0.16 }
        ]
    },
    {
        id: "bright-finale",
        name: "Bright Finale",
        notes: [
            { freq: 784, duration: 0.1, gap: 0.03, type: "sine", volume: 0.18 },
            { freq: 988, duration: 0.1, gap: 0.03, type: "sine", volume: 0.19 },
            { freq: 1760, duration: 0.34, gap: 0.08, type: "triangle", volume: 0.26 }
        ]
    }
];

const AVATAR_GROUPS = [
    {
        name: "Power Animals",
        items: [
            { id: "lion", label: "Lion", symbol: "🦁" },
            { id: "tiger", label: "Tiger", symbol: "🐯" },
            { id: "wolf", label: "Wolf", symbol: "🐺" },
            { id: "eagle", label: "Eagle", symbol: "🦅" },
            { id: "owl", label: "Owl", symbol: "🦉" },
            { id: "turtle", label: "Turtle", symbol: "🐢" }
        ]
    },
    {
        name: "Mythic And Wild",
        items: [
            { id: "dragon", label: "Dragon", symbol: "🐉" },
            { id: "dinosaur", label: "Dinosaur", symbol: "🦖" },
            { id: "butterfly", label: "Butterfly", symbol: "🦋" },
            { id: "octopus", label: "Octopus", symbol: "🐙" },
            { id: "squid", label: "Squid", symbol: "🦑" },
            { id: "phoenix", label: "Phoenix", symbol: "🔥" }
        ]
    },
    {
        name: "Power Symbols",
        items: [
            { id: "lightning", label: "Lightning", symbol: "⚡" },
            { id: "fire", label: "Fire", symbol: "🔥" },
            { id: "ice", label: "Ice", symbol: "❄" },
            { id: "wave", label: "Wave", symbol: "🌊" },
            { id: "star", label: "Star", symbol: "⭐" },
            { id: "moon", label: "Moon", symbol: "🌙" }
        ]
    },
    {
        name: "Sky And Steel",
        items: [
            { id: "sun", label: "Sun", symbol: "☀" },
            { id: "rainbow", label: "Rainbow", symbol: "🌈" },
            { id: "diamond", label: "Diamond", symbol: "💎" },
            { id: "crystal", label: "Crystal", symbol: "🔮" },
            { id: "sword", label: "Sword", symbol: "🗡" },
            { id: "shield", label: "Shield", symbol: "🛡" }
        ]
    },
    {
        name: "Fun Items",
        items: [
            { id: "rocket", label: "Rocket", symbol: "🚀" },
            { id: "art", label: "Art", symbol: "🎨" },
            { id: "music", label: "Music", symbol: "🎵" },
            { id: "game", label: "Game", symbol: "🎮" },
            { id: "book", label: "Book", symbol: "📚" },
            { id: "idea", label: "Idea", symbol: "💡" }
        ]
    },
    {
        name: "Mind And Mood",
        items: [
            { id: "brain", label: "Brain", symbol: "🧠" },
            { id: "heart", label: "Heart", symbol: "❤️" },
            { id: "clover", label: "Clover", symbol: "🍀" },
            { id: "cactus", label: "Cactus", symbol: "🌵" },
            { id: "pizza", label: "Pizza", symbol: "🍕" },
            { id: "coffee", label: "Coffee", symbol: "☕" }
        ]
    }
];

const ACHIEVEMENT_DEFS = [
    {
        id: "first-focus",
        name: "First Focus",
        tier: "common",
        description: "Complete your first focus session.",
        progress: (metrics) => ratioProgress(metrics.completedSessions, 1),
        unlocked: (metrics) => metrics.completedSessions >= 1
    },
    {
        id: "week-warrior",
        name: "Week Warrior",
        tier: "common",
        description: "Keep a 7 day streak alive.",
        progress: (metrics) => ratioProgress(metrics.streak, 7),
        unlocked: (metrics) => metrics.streak >= 7
    },
    {
        id: "century",
        name: "Century",
        tier: "common",
        description: "Reach 100 focused minutes.",
        progress: (metrics) => ratioProgress(metrics.totalMinutes, 100),
        unlocked: (metrics) => metrics.totalMinutes >= 100
    },
    {
        id: "night-owl",
        name: "Night Owl",
        tier: "rare",
        description: "Finish a session after 10 PM.",
        progress: (metrics) => metrics.nightOwlUnlocked ? 100 : 0,
        unlocked: (metrics) => metrics.nightOwlUnlocked
    },
    {
        id: "early-bird",
        name: "Early Bird",
        tier: "rare",
        description: "Finish a session before 7 AM.",
        progress: (metrics) => metrics.earlyBirdUnlocked ? 100 : 0,
        unlocked: (metrics) => metrics.earlyBirdUnlocked
    },
    {
        id: "month-master",
        name: "Month Master",
        tier: "rare",
        description: "Log focus on 20 distinct days in one month.",
        progress: (metrics) => ratioProgress(metrics.monthActiveDays, 20),
        unlocked: (metrics) => metrics.monthActiveDays >= 20
    },
    {
        id: "marathon",
        name: "Marathon",
        tier: "rare",
        description: "Complete a 45 minute deep session.",
        progress: (metrics) => ratioProgress(metrics.longestSessionMinutes, 45),
        unlocked: (metrics) => metrics.longestSessionMinutes >= 45
    },
    {
        id: "perfectionist",
        name: "Perfectionist",
        tier: "epic",
        description: "Complete 10 sessions with a 100% completion rate.",
        progress: (metrics) => Math.round(Math.min(metrics.completionRate / 100, 1) * ratioProgress(metrics.completedSessions, 10)),
        unlocked: (metrics) => metrics.completedSessions >= 10 && metrics.completionRate === 100
    },
    {
        id: "focus-legend",
        name: "Focus Legend",
        tier: "legendary",
        description: "Reach 1,000 focused minutes.",
        progress: (metrics) => ratioProgress(metrics.totalMinutes, 1000),
        unlocked: (metrics) => metrics.totalMinutes >= 1000
    },
    {
        id: "unstoppable",
        name: "Unstoppable",
        tier: "legendary",
        description: "Hold a 30 day streak.",
        progress: (metrics) => ratioProgress(metrics.streak, 30),
        unlocked: (metrics) => metrics.streak >= 30
    }
];

const dom = {};

const state = {
    currentUser: null,
    timer: {
        modeId: "adhd",
        focusMinutes: TIMER_MODES.adhd.focusMinutes,
        breakMinutes: TIMER_MODES.adhd.breakMinutes,
        totalSeconds: TIMER_MODES.adhd.focusMinutes * 60,
        remainingSeconds: TIMER_MODES.adhd.focusMinutes * 60,
        intervalId: null,
        isRunning: false,
        isPaused: false,
        taskName: "",
        startedAt: null
    },
    taskFilter: "all",
    postType: "achievement",
    leaderboardFilter: "week",
    profileTab: "overview",
    selectedAvatarId: "lion",
    audioContext: null,
    activeToneNodes: [],
    completionAlertIntervalId: null,
    completionAlertActive: false,
    previewFlashTimeoutId: null,
    achievementState: [],
    dailySummaryTimeout: null,
    liveMetrics: null,
    liveTick: 0,
    liveClockIntervalId: null
};

document.addEventListener("DOMContentLoaded", init);

function init() {
    cacheDom();
    bindEvents();
    populateRingtones();
    renderAvatarModal();
    hydrateSession();
    updateTimerDisplay();
    state.liveClockIntervalId = window.setInterval(runLiveClock, 1000);
    setInterval(runScheduledChecks, 60000);
}

function cacheDom() {
    dom.authScreen = document.getElementById("authScreen");
    dom.appShell = document.getElementById("appShell");
    dom.loginForm = document.getElementById("loginForm");
    dom.signupForm = document.getElementById("signupForm");
    dom.loginTab = document.getElementById("loginTab");
    dom.signupTab = document.getElementById("signupTab");
    dom.loginEmail = document.getElementById("loginEmail");
    dom.loginPassword = document.getElementById("loginPassword");
    dom.signupName = document.getElementById("signupName");
    dom.signupEmail = document.getElementById("signupEmail");
    dom.signupPassword = document.getElementById("signupPassword");
    dom.loginError = document.getElementById("loginError");
    dom.signupError = document.getElementById("signupError");
    dom.navToggle = document.getElementById("navToggle");
    dom.sectionNav = document.getElementById("sectionNav");
    dom.navChips = Array.from(document.querySelectorAll(".nav-chip"));
    dom.headerAvatar = document.getElementById("headerAvatar");
    dom.headerDisplayName = document.getElementById("headerDisplayName");
    dom.headerBadge = document.getElementById("headerBadge");
    dom.openProfileBtn = document.getElementById("openProfileBtn");
    dom.logoutBtn = document.getElementById("logoutBtn");
    dom.taskInput = document.getElementById("taskInput");
    dom.charCount = document.getElementById("charCount");
    dom.timerProgress = document.getElementById("timerProgress");
    dom.timeDisplay = document.getElementById("timeDisplay");
    dom.timerStatus = document.getElementById("timerStatus");
    dom.slideStart = document.getElementById("slideStart");
    dom.currentModeLabel = document.getElementById("currentModeLabel");
    dom.modeRow = document.getElementById("modeRow");
    dom.startBtn = document.getElementById("startBtn");
    dom.pauseBtn = document.getElementById("pauseBtn");
    dom.resumeBtn = document.getElementById("resumeBtn");
    dom.resetBtn = document.getElementById("resetBtn");
    dom.focusSetupIntro = document.getElementById("focusSetupIntro");
    dom.dismissFocusSetupBtn = document.getElementById("dismissFocusSetupBtn");
    dom.showFocusSetupBtn = document.getElementById("showFocusSetupBtn");
    dom.swipeControlTrack = document.getElementById("swipeControlTrack");
    dom.aiModeRow = document.getElementById("aiModeRow");
    dom.aiTopicInput = document.getElementById("aiTopicInput");
    dom.aiSurface = document.getElementById("aiSurface");
    dom.aiModeBadge = document.getElementById("aiModeBadge");
    dom.aiPrincipleBadge = document.getElementById("aiPrincipleBadge");
    dom.aiTickDisplay = document.getElementById("aiTickDisplay");
    dom.aiTopicEcho = document.getElementById("aiTopicEcho");
    dom.aiPrimaryMessage = document.getElementById("aiPrimaryMessage");
    dom.aiBulletList = document.getElementById("aiBulletList");
    dom.aiReferenceGrid = document.getElementById("aiReferenceGrid");
    dom.fullscreenBtn = document.getElementById("fullscreenBtn");
    dom.soundToggle = document.getElementById("soundToggle");
    dom.flashToggle = document.getElementById("flashToggle");
    dom.ringtoneSelect = document.getElementById("ringtoneSelect");
    dom.previewAlertBtn = document.getElementById("previewAlertBtn");
    dom.parkingInput = document.getElementById("parkingInput");
    dom.parkingItems = document.getElementById("parkingItems");
    dom.notificationFeed = document.getElementById("notificationFeed");
    dom.statsGrid = document.getElementById("statsGrid");
    dom.dailyChart = document.getElementById("dailyChart");
    dom.weeklyLineChart = document.getElementById("weeklyLineChart");
    dom.weeklyLineLabels = document.getElementById("weeklyLineLabels");
    dom.taskFilters = document.getElementById("taskFilters");
    dom.recentTasksList = document.getElementById("recentTasksList");
    dom.goalProgressCount = document.getElementById("goalProgressCount");
    dom.goalForm = document.getElementById("goalForm");
    dom.goalInput = document.getElementById("goalInput");
    dom.goalList = document.getElementById("goalList");
    dom.achievementUnlockedCount = document.getElementById("achievementUnlockedCount");
    dom.achievementGrid = document.getElementById("achievementGrid");
    dom.postTypeRow = document.getElementById("postTypeRow");
    dom.postForm = document.getElementById("postForm");
    dom.postContent = document.getElementById("postContent");
    dom.anonymousPostToggle = document.getElementById("anonymousPostToggle");
    dom.postError = document.getElementById("postError");
    dom.communityFeed = document.getElementById("communityFeed");
    dom.leaderboardFilters = document.getElementById("leaderboardFilters");
    dom.leaderboardList = document.getElementById("leaderboardList");
    dom.hallOfFameList = document.getElementById("hallOfFameList");
    dom.adminShell = document.getElementById("adminShell");
    dom.completionModal = document.getElementById("completionModal");
    dom.dismissCompletionBtn = document.getElementById("dismissCompletionBtn");
    dom.completionMessage = document.getElementById("completionMessage");
    dom.screenFlash = document.getElementById("screenFlash");
    dom.profileModal = document.getElementById("profileModal");
    dom.closeProfileBtn = document.getElementById("closeProfileBtn");
    dom.profileAvatarHero = document.getElementById("profileAvatarHero");
    dom.profileDisplayName = document.getElementById("profileDisplayName");
    dom.profileEmail = document.getElementById("profileEmail");
    dom.profileStatGrid = document.getElementById("profileStatGrid");
    dom.profileTabs = document.getElementById("profileTabs");
    dom.profileTabContent = document.getElementById("profileTabContent");
    dom.changeAvatarBtn = document.getElementById("changeAvatarBtn");
    dom.avatarModal = document.getElementById("avatarModal");
    dom.closeAvatarBtn = document.getElementById("closeAvatarBtn");
    dom.cancelAvatarBtn = document.getElementById("cancelAvatarBtn");
    dom.saveAvatarBtn = document.getElementById("saveAvatarBtn");
    dom.avatarCategoryGrid = document.getElementById("avatarCategoryGrid");
    dom.openNotificationsBtn = document.getElementById("openNotificationsBtn");
    dom.dockQuickGoal = document.getElementById("dockQuickGoal");
    dom.dockQuickAI = document.getElementById("dockQuickAI");
    dom.dockQuickProfile = document.getElementById("dockQuickProfile");
}

function bindEvents() {
    dom.loginTab.addEventListener("click", () => setAuthMode("login"));
    dom.signupTab.addEventListener("click", () => setAuthMode("signup"));
    dom.loginForm.addEventListener("submit", handleLogin);
    dom.signupForm.addEventListener("submit", handleSignup);
    dom.navToggle.addEventListener("click", () => dom.sectionNav.classList.toggle("open"));
    dom.sectionNav.addEventListener("click", handleNavClick);
    dom.openProfileBtn.addEventListener("click", openProfileModal);
    dom.closeProfileBtn.addEventListener("click", closeProfileModal);
    dom.logoutBtn.addEventListener("click", handleLogout);
    dom.taskInput.addEventListener("input", () => {
        dom.charCount.textContent = dom.taskInput.value.length;
    });
    dom.modeRow.addEventListener("click", handleModeSelect);
    dom.startBtn.addEventListener("click", startTimer);
    dom.pauseBtn.addEventListener("click", pauseTimer);
    dom.resumeBtn.addEventListener("click", resumeTimer);
    dom.resetBtn.addEventListener("click", resetTimer);
    dom.dismissFocusSetupBtn.addEventListener("click", dismissFocusSetupIntro);
    dom.showFocusSetupBtn.addEventListener("click", showFocusSetupIntro);
    dom.aiModeRow.addEventListener("click", handleAiModeSelect);
    dom.aiTopicInput.addEventListener("input", handleAiTopicInput);
    dom.swipeControlTrack.addEventListener("keydown", handleSwipeTrackKeydown);
    dom.fullscreenBtn.addEventListener("click", toggleFullscreen);
    dom.slideStart.addEventListener("input", handleSlideStart);
    dom.slideStart.addEventListener("change", resetSlideStart);
    dom.soundToggle.addEventListener("change", handleNotificationPrefChange);
    dom.flashToggle.addEventListener("change", handleNotificationPrefChange);
    dom.ringtoneSelect.addEventListener("change", handleNotificationPrefChange);
    dom.previewAlertBtn.addEventListener("click", previewAlert);
    dom.parkingInput.addEventListener("keydown", handleParkingInput);
    dom.parkingItems.addEventListener("click", handleParkingChipClick);
    dom.taskFilters.addEventListener("click", handleTaskFilterClick);
    dom.goalForm.addEventListener("submit", handleGoalSubmit);
    dom.goalList.addEventListener("change", handleGoalToggle);
    dom.goalList.addEventListener("click", handleGoalDelete);
    dom.postTypeRow.addEventListener("click", handlePostTypeClick);
    dom.postForm.addEventListener("submit", handlePostSubmit);
    dom.communityFeed.addEventListener("click", handleReactionClick);
    dom.leaderboardFilters.addEventListener("click", handleLeaderboardFilterClick);
    dom.dismissCompletionBtn.addEventListener("click", dismissCompletionAlert);
    dom.completionModal.addEventListener("click", (event) => {
        if (event.target === dom.completionModal) {
            dismissCompletionAlert();
        }
    });
    dom.profileModal.addEventListener("click", (event) => {
        if (event.target === dom.profileModal) {
            closeProfileModal();
        }
    });
    dom.avatarModal.addEventListener("click", (event) => {
        if (event.target === dom.avatarModal) {
            closeAvatarModal();
        }
    });
    dom.profileTabs.addEventListener("click", handleProfileTabClick);
    dom.profileTabContent.addEventListener("submit", handleProfileContentSubmit);
    dom.profileTabContent.addEventListener("change", handleProfileContentChange);
    dom.profileTabContent.addEventListener("click", handleProfileContentClick);
    dom.changeAvatarBtn.addEventListener("click", openAvatarModal);
    dom.closeAvatarBtn.addEventListener("click", closeAvatarModal);
    dom.cancelAvatarBtn.addEventListener("click", closeAvatarModal);
    dom.saveAvatarBtn.addEventListener("click", saveSelectedAvatar);
    dom.avatarCategoryGrid.addEventListener("click", handleAvatarSelect);
    dom.adminShell.addEventListener("click", handleAdminClick);
    dom.openNotificationsBtn.addEventListener("click", () => {
        document.querySelector(".notification-feed").scrollIntoView({ behavior: "smooth", block: "center" });
        markNotificationsRead();
    });
    dom.dockQuickGoal.addEventListener("click", () => scrollToSection("goalsSection"));
    dom.dockQuickAI.addEventListener("click", () => dom.aiSurface.scrollIntoView({ behavior: "smooth", block: "center" }));
    dom.dockQuickProfile.addEventListener("click", openProfileModal);
    document.addEventListener("keydown", handleGlobalKeydown);
}

function setAuthMode(mode) {
    const loginMode = mode === "login";
    dom.loginTab.classList.toggle("active", loginMode);
    dom.signupTab.classList.toggle("active", !loginMode);
    dom.loginForm.classList.toggle("hidden", !loginMode);
    dom.signupForm.classList.toggle("hidden", loginMode);
    dom.loginError.textContent = "";
    dom.signupError.textContent = "";
}

async function handleLogin(event) {
    event.preventDefault();
    dom.loginError.textContent = "";

    const email = dom.loginEmail.value.trim().toLowerCase();
    const password = dom.loginPassword.value;
    if (!email.includes("@")) {
        dom.loginError.textContent = "Use a valid email address.";
        return;
    }
    if (password.length < 6) {
        dom.loginError.textContent = "Password must be at least 6 characters.";
        return;
    }

    const users = getUsers();
    const user = users.find((entry) => entry.email === email);
    if (!user) {
        dom.loginError.textContent = "No account matches that email.";
        return;
    }

    const hash = await hashPassword(password);
    if (user.passwordHash !== hash) {
        dom.loginError.textContent = "Password does not match.";
        return;
    }

    user.lastLogin = new Date().toISOString();
    persistUser(user);
    localStorage.setItem(STORAGE_KEYS.currentUserId, user.id);
    state.currentUser = user;
    showApp();
}

async function handleSignup(event) {
    event.preventDefault();
    dom.signupError.textContent = "";

    const displayName = dom.signupName.value.trim();
    const email = dom.signupEmail.value.trim().toLowerCase();
    const password = dom.signupPassword.value;
    if (!displayName) {
        dom.signupError.textContent = "Display name is required.";
        return;
    }
    if (!email.includes("@")) {
        dom.signupError.textContent = "Use a valid email address.";
        return;
    }
    if (password.length < 6) {
        dom.signupError.textContent = "Password must be at least 6 characters.";
        return;
    }

    const users = getUsers();
    if (users.some((entry) => entry.email === email)) {
        dom.signupError.textContent = "That email is already in use.";
        return;
    }

    const newUser = withUserDefaults({
        id: createId("user"),
        name: displayName,
        email: email,
        passwordHash: await hashPassword(password),
        avatar: AVATAR_GROUPS[0].items[0].id,
        bio: "",
        creationDate: new Date().toISOString(),
        role: email === ADMIN_EMAIL ? "admin" : "member"
    });

    users.push(newUser);
    setTable(STORAGE_KEYS.users, users);
    localStorage.setItem(STORAGE_KEYS.currentUserId, newUser.id);
    state.currentUser = newUser;
    addNotification(newUser.id, "welcome", "Welcome to Focus Hub", "Your account is ready. Pick one task and start the first block.", `welcome-${newUser.id}`);
    queueAdminReport("daily-digest", "New user joined", `${displayName} created an account in ${COMPANY.product}.`, `new-user-${newUser.id}`);
    showApp();
}

function hydrateSession() {
    const currentUserId = localStorage.getItem(STORAGE_KEYS.currentUserId);
    if (!currentUserId) {
        showAuth();
        return;
    }
    const user = getUsers().find((entry) => entry.id === currentUserId);
    if (!user) {
        localStorage.removeItem(STORAGE_KEYS.currentUserId);
        showAuth();
        return;
    }
    state.currentUser = user;
    showApp();
}

function showAuth() {
    state.currentUser = null;
    state.liveMetrics = null;
    dom.authScreen.classList.remove("hidden");
    dom.appShell.classList.add("hidden");
}

function showApp() {
    dom.authScreen.classList.add("hidden");
    dom.appShell.classList.remove("hidden");
    state.currentUser = withUserDefaults(state.currentUser);
    persistUser(state.currentUser);
    applyNotificationPrefsToControls();
    renderAll();
}

function handleLogout() {
    dismissCompletionAlert();
    stopTimerInterval();
    localStorage.removeItem(STORAGE_KEYS.currentUserId);
    state.currentUser = null;
    resetTimerState();
    closeAvatarModal();
    closeProfileModal();
    showAuth();
}

function renderAll() {
    if (!state.currentUser) {
        return;
    }

    ensureScheduledNotifications();
    ensureAdminReports();
    const baseMetrics = buildMetrics(state.currentUser.id);
    state.achievementState = syncAchievementUnlocks(baseMetrics);
    const metrics = buildMetrics(state.currentUser.id);
    state.liveMetrics = metrics;
    renderHeader(metrics);
    renderTimerArea(metrics);
    renderStats(metrics);
    renderDailyChart(metrics.last7Days);
    renderWeeklyChart(metrics.last8Weeks);
    renderRecentTasks(metrics);
    renderGoals(metrics);
    renderAchievements(metrics);
    renderNotifications();
    renderCommunity(metrics);
    renderAdmin(metrics);
    renderProfile(metrics);
}

function renderHeader(metrics) {
    const avatar = getAvatarById(state.currentUser.avatar);
    dom.headerAvatar.textContent = avatar.symbol;
    dom.headerDisplayName.textContent = state.currentUser.name;
    dom.headerBadge.textContent = `${metrics.badgesUnlocked} badges`;
}

function renderTimerArea(metrics) {
    dom.charCount.textContent = dom.taskInput.value.length;
    applyNotificationPrefsToControls();
    dom.currentModeLabel.textContent = getCurrentMode().label;
    updateModeButtons();
    updateTimerDisplay();
    renderAiControls();
    renderFocusSetupIntro();
    renderOnethingAI(metrics);
    renderParkingLot();
}

function runLiveClock() {
    state.liveTick += 1;
    if (!state.currentUser) {
        return;
    }
    renderOnethingAI(state.liveMetrics || buildMetrics(state.currentUser.id));
}

function renderAiControls() {
    if (!state.currentUser) {
        return;
    }
    updateFilterChips(dom.aiModeRow, getAiState().mode, "data-ai-mode");
    if (document.activeElement !== dom.aiTopicInput) {
        dom.aiTopicInput.value = state.currentUser.ai.topic || "";
    }
}

function renderFocusSetupIntro() {
    const hidden = Boolean(getAiState().introDismissed);
    dom.focusSetupIntro.classList.toggle("hidden", hidden);
    dom.showFocusSetupBtn.classList.toggle("hidden", !hidden);
}

function renderOnethingAI(metrics) {
    if (!state.currentUser) {
        return;
    }

    const aiMode = ONETHING_AI_MODES[getAiState().mode] || ONETHING_AI_MODES.focus;
    const principle = ONETHING_AI_PRINCIPLES[new Date().getSeconds() % ONETHING_AI_PRINCIPLES.length];
    const topic = getActiveStudyTopic();
    const response = buildOnethingAiResponse({
        mode: aiMode,
        principle,
        topic,
        metrics
    });

    dom.aiModeBadge.textContent = aiMode.label;
    dom.aiPrincipleBadge.textContent = `Principle: ${principle.label}`;
    dom.aiTickDisplay.textContent = `${String(new Date().getSeconds()).padStart(2, "0")}s`;
    dom.aiTopicEcho.textContent = topic;
    dom.aiPrimaryMessage.textContent = response.message;
    dom.aiBulletList.innerHTML = response.bullets.map((entry) => `
        <article class="ai-bullet-row">
            <span>${escapeHtml(entry.label)}</span>
            <div>
                <strong>${escapeHtml(entry.title)}</strong>
                <p>${escapeHtml(entry.text)}</p>
            </div>
        </article>
    `).join("");
    dom.aiReferenceGrid.innerHTML = response.references.map((entry) => `
        <article class="ai-reference-card">
            <span>${escapeHtml(entry.label)}</span>
            <strong>${escapeHtml(entry.value)}</strong>
        </article>
    `).join("");
}

function buildOnethingAiResponse({ mode, principle, topic, metrics }) {
    const timerState = state.timer.isRunning ? "running" : state.timer.isPaused ? "paused" : "idle";
    const taskLabel = state.timer.taskName || dom.taskInput.value.trim() || topic;
    const remainingLabel = formatClockLabel(state.timer.remainingSeconds);
    const streakLabel = metrics.streak ? `${metrics.streak} day streak` : "new streak";
    const completionLabel = `${metrics.completionRate}% completion rate`;

    const principleLines = {
        clarify: {
            now: `Name the exact question inside ${topic}.`,
            next: `Keep only one sentence or one problem visible.`,
            check: `Say the idea back in plain words before moving on.`
        },
        chunk: {
            now: `Split ${topic} into three tiny parts: core idea, example, recap.`,
            next: `Finish the current chunk before opening anything new.`,
            check: `If the chunk feels large, cut it in half again.`
        },
        example: {
            now: `Attach one example to ${topic} so the idea becomes concrete.`,
            next: `Write or imagine a single worked example from memory.`,
            check: `If the example breaks, that is the concept to review next.`
        },
        check: {
            now: `Close the reference and test what you still remember about ${topic}.`,
            next: `Answer one short self-check before rereading.`,
            check: `If you hesitate, reopen only the exact line you need.`
        }
    };

    const principlePack = principleLines[principle.id];
    const idleLead = `Onething AI is ready for ${topic}. ${principlePack.now}`;
    const runningLead = `Stay with ${taskLabel}. ${principlePack.now} You have ${remainingLabel} left in this block.`;
    const pausedLead = `You paused ${taskLabel}. ${principlePack.next} Then resume with a smaller step.`;

    if (mode.id === "plan") {
        return {
            message: timerState === "running"
                ? `${runningLead} Plan the rest as read, note, recall, and check.`
                : timerState === "paused"
                    ? `${pausedLead} Re-enter with the smallest step first.`
                    : `${idleLead} Build the block as read, note, recall, and check before you start.`,
            bullets: [
                { label: "01", title: "Read", text: `Scan ${topic} once for structure, not perfection.` },
                { label: "02", title: "Note", text: `Capture only the terms, rules, or steps that matter.` },
                { label: "03", title: "Recall", text: `Close the source and rebuild the idea from memory.` }
            ],
            references: [
                { label: "Topic", value: topic },
                { label: "Session", value: state.timer.isRunning ? `${remainingLabel} left` : getCurrentMode().label },
                { label: "Momentum", value: `${metrics.completedSessions} completed sessions` }
            ]
        };
    }

    if (mode.id === "explain") {
        return {
            message: timerState === "running"
                ? `${runningLead} Explain it as if you are teaching one calm beginner.`
                : timerState === "paused"
                    ? `${pausedLead} Restart by teaching the first line out loud.`
                    : `${idleLead} Start with: what it is, why it matters, and one example.`,
            bullets: [
                { label: "A", title: "What It Is", text: `Define ${topic} in one short sentence.` },
                { label: "B", title: "Why It Matters", text: `Add the result, use, or effect in real work.` },
                { label: "C", title: "Example", text: `Give one example that proves you actually understand it.` }
            ],
            references: [
                { label: "Voice", value: "Plain language first" },
                { label: "Checkpoint", value: "Could a friend repeat your explanation?" },
                { label: "Streak", value: streakLabel }
            ]
        };
    }

    if (mode.id === "quiz") {
        return {
            message: timerState === "running"
                ? `${runningLead} Quiz yourself before looking anything up again.`
                : timerState === "paused"
                    ? `${pausedLead} Resume by answering one question from memory.`
                    : `${idleLead} Begin with a question, not another reread.`,
            bullets: [
                { label: "Q1", title: "Definition", text: `What is ${topic} without looking at notes?` },
                { label: "Q2", title: "Mechanism", text: `How does it work or unfold step by step?` },
                { label: "Q3", title: "Application", text: `Where would you use it in a problem or project?` }
            ],
            references: [
                { label: "Mode", value: "Active recall" },
                { label: "Clock", value: state.timer.isRunning ? `${remainingLabel} left` : "Ready to start" },
                { label: "Accuracy", value: completionLabel }
            ]
        };
    }

    if (mode.id === "reference") {
        return {
            message: timerState === "running"
                ? `${runningLead} Keep only the formula, rule, or outline you need right now.`
                : timerState === "paused"
                    ? `${pausedLead} Reopen only the exact reference line that unlocks the next step.`
                    : `${idleLead} Turn the topic into a clean mini-reference before the session starts.`,
            bullets: [
                { label: "Ref", title: "Core Fact", text: `Write the one rule, formula, or idea that unlocks ${topic}.` },
                { label: "Use", title: "When To Use It", text: `Note the signal that tells you this topic is the right tool.` },
                { label: "Risk", title: "Common Miss", text: `Capture the mistake most likely to cost you time later.` }
            ],
            references: [
                { label: "Current Task", value: taskLabel },
                { label: "Best Use", value: "Keep the needed line visible, hide the rest" },
                { label: "Recent Win", value: `${metrics.totalMinutes} focus minutes logged` }
            ]
        };
    }

    return {
        message: timerState === "running"
            ? `${runningLead} Keep the next move tiny and obvious.`
            : timerState === "paused"
                ? `${pausedLead} Make the restart so small it feels automatic.`
                : `${idleLead} Slide right when the lane feels clear.`,
        bullets: [
            { label: "Now", title: "Immediate Step", text: principlePack.now },
            { label: "Next", title: "Stay Narrow", text: principlePack.next },
            { label: "Check", title: "Before Switching", text: principlePack.check }
        ],
        references: [
            { label: "Topic", value: topic },
            { label: "Clock", value: state.timer.isRunning ? `${remainingLabel} left` : getCurrentMode().label },
            { label: "Progress", value: `${metrics.completedSessions} sessions - ${completionLabel}` }
        ]
    };
}

function renderStats(metrics) {
    dom.statsGrid.innerHTML = [
        buildStatCard("Total Sessions", metrics.totalSessions, `${metrics.completedSessions} completed`),
        buildStatCard("Total Minutes", metrics.totalMinutes, `${metrics.focusHours} focus hours`),
        buildStatCard("Current Day Streak", metrics.streak, metrics.streak ? `${metrics.streak} days alive` : "Start a streak today"),
        buildStatCard("Completion Rate", `${metrics.completionRate}%`, `${metrics.incompleteSessions} incomplete sessions`)
    ].join("");
}

function renderDailyChart(days) {
    if (!days.length) {
        dom.dailyChart.innerHTML = `<div class="empty-state">No focus data yet.</div>`;
        return;
    }

    const maxMinutes = Math.max(...days.map((entry) => entry.minutes), 1);
    dom.dailyChart.innerHTML = days.map((entry) => {
        const height = Math.max((entry.minutes / maxMinutes) * 100, entry.minutes ? 8 : 0);
        return `
            <div class="bar-column">
                <strong>${entry.minutes}m</strong>
                <div class="bar-track">
                    <div class="bar-fill" style="height:${height}%"></div>
                </div>
                <span>${entry.label}</span>
            </div>
        `;
    }).join("");
}

function renderWeeklyChart(weeks) {
    if (!weeks.length || weeks.every((entry) => entry.minutes === 0)) {
        dom.weeklyLineChart.innerHTML = "";
        dom.weeklyLineLabels.innerHTML = `<span class="empty-state">Weekly progress appears after sessions are logged.</span>`;
        return;
    }

    const width = 560;
    const height = 260;
    const padding = 30;
    const maxMinutes = Math.max(...weeks.map((entry) => entry.minutes), 1);
    const usableWidth = width - padding * 2;
    const usableHeight = height - padding * 2;

    const points = weeks.map((entry, index) => {
        const x = padding + (usableWidth / Math.max(weeks.length - 1, 1)) * index;
        const y = height - padding - (entry.minutes / maxMinutes) * usableHeight;
        return { x, y, label: entry.label, minutes: entry.minutes };
    });

    const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");
    const circles = points.map((point) => `
        <circle cx="${point.x}" cy="${point.y}" r="5" fill="#19d47b"></circle>
    `).join("");
    const gridLines = [0.25, 0.5, 0.75, 1].map((ratio) => {
        const y = height - padding - usableHeight * ratio;
        return `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="6 8"></line>`;
    }).join("");

    dom.weeklyLineChart.innerHTML = `
        ${gridLines}
        <polyline points="${polyline}" fill="none" stroke="#4da3ff" stroke-width="4"></polyline>
        ${circles}
    `;
    dom.weeklyLineLabels.innerHTML = weeks.map((entry) => `<span>${entry.label}</span>`).join("");
}

function renderRecentTasks(metrics) {
    const filtered = metrics.recentTasks.filter((session) => {
        if (state.taskFilter === "completed") {
            return session.completionStatus;
        }
        if (state.taskFilter === "incomplete") {
            return !session.completionStatus;
        }
        return true;
    });

    updateFilterChips(dom.taskFilters, state.taskFilter, "data-filter");

    if (!filtered.length) {
        dom.recentTasksList.innerHTML = `<div class="empty-state">No tasks match this filter yet.</div>`;
        return;
    }

    dom.recentTasksList.innerHTML = filtered.slice(0, 10).map((session) => `
        <div class="recent-item">
            <div>
                <strong>${escapeHtml(session.taskName || "Unnamed focus block")}</strong>
                <div class="recent-item-meta">${escapeHtml(getModeLabel(session.mode))} • ${formatDate(session.date)}</div>
            </div>
            <div class="recent-item-meta">${session.completionStatus ? "Completed" : "Incomplete"} • ${secondsToMinutes(session.duration)}m</div>
        </div>
    `).join("");
}

function renderGoals(metrics) {
    const goals = getUserGoals(state.currentUser.id).sort((first, second) => {
        if (first.completed !== second.completed) {
            return Number(first.completed) - Number(second.completed);
        }
        return new Date(second.creationDate) - new Date(first.creationDate);
    });

    dom.goalProgressCount.textContent = `${metrics.completedGoals}/${metrics.totalGoals}`;
    if (!goals.length) {
        dom.goalList.innerHTML = `<div class="empty-state">Add a goal to keep the next target visible.</div>`;
        return;
    }

    dom.goalList.innerHTML = goals.map((goal) => `
        <div class="goal-item ${goal.completed ? "done" : ""}" data-goal-id="${goal.id}">
            <div class="goal-main">
                <input type="checkbox" data-goal-id="${goal.id}" ${goal.completed ? "checked" : ""}>
                <div>
                    <strong class="goal-text">${escapeHtml(goal.title)}</strong>
                    <div class="goal-meta">${goal.type} • ${formatDate(goal.creationDate)}</div>
                </div>
            </div>
            <button type="button" class="goal-delete" data-delete-goal="${goal.id}">Delete</button>
        </div>
    `).join("");
}

function renderAchievements(metrics) {
    dom.achievementUnlockedCount.textContent = metrics.badgesUnlocked;
    if (!state.achievementState.length) {
        dom.achievementGrid.innerHTML = `<div class="empty-state">Achievements will unlock as you log focus.</div>`;
        return;
    }

    dom.achievementGrid.innerHTML = state.achievementState.map((achievement) => `
        <article class="achievement-card">
            <div class="achievement-header">
                <div>
                    <strong>${achievement.name}</strong>
                    <p>${achievement.description}</p>
                </div>
                <span class="rarity-badge rarity-${achievement.tier}">${achievement.tier}</span>
            </div>
            <div class="progress-track">
                <div class="progress-fill" style="width:${achievement.progress}%"></div>
            </div>
            <div class="progress-meta">
                <span>${achievement.unlocked ? "Unlocked" : "In progress"}</span>
                <span>${achievement.progress}%</span>
            </div>
        </article>
    `).join("");
}

function renderNotifications() {
    const notifications = getUserNotifications(state.currentUser.id)
        .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt))
        .slice(0, 8);

    if (!notifications.length) {
        dom.notificationFeed.innerHTML = `<div class="empty-state">Alerts and reminders will show up here.</div>`;
        return;
    }

    dom.notificationFeed.innerHTML = notifications.map((notification) => `
        <div class="notification-item">
            <strong>${escapeHtml(notification.title)}</strong>
            <div class="recent-item-meta">${escapeHtml(notification.message)}</div>
            <div class="recent-item-meta">${formatDateTime(notification.createdAt)}</div>
        </div>
    `).join("");
}

function renderCommunity(metrics) {
    renderCommunityFeed();
    renderLeaderboard();
    renderHallOfFame();
    dom.postError.textContent = "";
    dom.anonymousPostToggle.checked = false;
    dom.postContent.placeholder = state.postType === "achievement"
        ? "What clicked into place today?"
        : state.postType === "goal"
            ? "What goal did you move forward?"
            : "Share a clean focus stat or motivating check-in";
    updateFilterChips(dom.postTypeRow, state.postType, "data-post-type");
}

function renderCommunityFeed() {
    const posts = getPosts().sort((first, second) => new Date(second.creationDate) - new Date(first.creationDate));
    if (!posts.length) {
        dom.communityFeed.innerHTML = `<div class="empty-state">The feed is quiet. Share the first safe update.</div>`;
        return;
    }

    dom.communityFeed.innerHTML = posts.slice(0, 12).map((post) => {
        const author = getUserById(post.userId);
        const avatar = post.anonymous ? { symbol: "◌", label: "Anonymous" } : getAvatarById(author ? author.avatar : "lion");
        const displayName = post.anonymous ? "Anonymous Focus" : author ? author.name : "Hidden User";
        const reactionButtons = REACTION_TYPES.map((reaction) => {
            const users = Array.isArray(post.reactions[reaction.id]) ? post.reactions[reaction.id] : [];
            const active = users.includes(state.currentUser.id);
            return `
                <button type="button" class="reaction-btn ${active ? "active" : ""}" data-react-post="${post.id}" data-reaction="${reaction.id}">
                    ${reaction.emoji} ${users.length}
                </button>
            `;
        }).join("");
        return `
            <article class="post-card">
                <div class="post-topline">
                    <div class="post-author">
                        <div class="post-avatar">${avatar.symbol}</div>
                        <div>
                            <strong>${escapeHtml(displayName)}</strong>
                            <div class="post-meta">${POST_TYPE_LABELS[post.postType]} • ${formatDateTime(post.creationDate)}</div>
                        </div>
                    </div>
                    <span class="post-type">${post.postType}</span>
                </div>
                <p>${escapeHtml(post.content)}</p>
                <div class="post-reactions">${reactionButtons}</div>
            </article>
        `;
    }).join("");
}

function renderLeaderboard() {
    updateFilterChips(dom.leaderboardFilters, state.leaderboardFilter, "data-board-filter");
    const rankings = getLeaderboardEntries(state.leaderboardFilter);
    if (!rankings.length) {
        dom.leaderboardList.innerHTML = `<div class="empty-state">Leaderboard is empty until someone opts in.</div>`;
        return;
    }

    dom.leaderboardList.innerHTML = rankings.slice(0, 10).map((entry, index) => `
        <div class="leaderboard-row">
            <div class="post-author">
                <div class="leaderboard-rank ${index < 3 ? `rank-${index + 1}` : ""}">${index + 1}</div>
                <div class="post-avatar">${getAvatarById(entry.avatar).symbol}</div>
                <div>
                    <strong>${escapeHtml(entry.name)}</strong>
                    <div class="leaderboard-meta">${entry.minutes} minutes • ${entry.streak} day streak</div>
                </div>
            </div>
            <strong>${entry.scoreLabel}</strong>
        </div>
    `).join("");
}

function renderHallOfFame() {
    const achievements = getAchievements()
        .filter((entry) => {
            const def = ACHIEVEMENT_DEFS.find((achievement) => achievement.id === entry.achievementId);
            if (!def || def.tier !== "legendary") {
                return false;
            }
            const owner = getUserById(entry.userId);
            return owner && owner.privacy.showAchievementsInHallOfFame;
        })
        .sort((first, second) => new Date(second.unlockDate) - new Date(first.unlockDate));

    if (!achievements.length) {
        dom.hallOfFameList.innerHTML = `<div class="empty-state">Legendary achievements will appear here.</div>`;
        return;
    }

    dom.hallOfFameList.innerHTML = achievements.slice(0, 6).map((entry) => {
        const owner = getUserById(entry.userId);
        const definition = ACHIEVEMENT_DEFS.find((achievement) => achievement.id === entry.achievementId);
        return `
            <div class="hall-item">
                <strong>${escapeHtml(owner.name)}</strong>
                <div class="recent-item-meta">${definition.name} • ${formatDate(entry.unlockDate)}</div>
            </div>
        `;
    }).join("");
}

function renderAdmin(metrics) {
    if (state.currentUser.role !== "admin") {
        dom.adminShell.innerHTML = `
            <div class="surface">
                <div class="empty-state">Admin tools are reserved for ${escapeHtml(ADMIN_EMAIL)}.</div>
            </div>
        `;
        return;
    }

    const adminMetrics = buildAdminMetrics();
    const reports = getAdminReports().sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt)).slice(0, 8);
    const growthMax = Math.max(...adminMetrics.growthSeries.map((entry) => entry.count), 1);
    dom.adminShell.innerHTML = `
        <div class="admin-metric-grid">
            ${buildStatCard("Total Users", adminMetrics.totalUsers, `${adminMetrics.newUsersToday} joined today`)}
            ${buildStatCard("Total Sessions", adminMetrics.totalSessions, `${adminMetrics.completedSessions} completed`)}
            ${buildStatCard("Daily Active Users", adminMetrics.dailyActiveUsers, `${adminMetrics.weeklyActiveUsers} active this week`)}
            ${buildStatCard("Weekly Growth", `${adminMetrics.weeklyGrowth}%`, `Proxy revenue $${adminMetrics.revenueProxy}`)}
        </div>
        <section class="surface">
            <div class="surface-heading">
                <div>
                    <p class="eyebrow">Weekly Growth</p>
                    <h4>New users over the last 7 days</h4>
                </div>
            </div>
            <div class="admin-chart">
                ${adminMetrics.growthSeries.map((entry) => {
                    const height = Math.max((entry.count / growthMax) * 100, entry.count ? 8 : 0);
                    return `
                        <div class="bar-column">
                            <strong>${entry.count}</strong>
                            <div class="bar-track">
                                <div class="mini-bar" style="height:${height}%"></div>
                            </div>
                            <span>${entry.label}</span>
                        </div>
                    `;
                }).join("")}
            </div>
        </section>
        <section class="surface">
            <div class="surface-heading">
                <div>
                    <p class="eyebrow">Exports</p>
                    <h4>JSON and analytics</h4>
                </div>
            </div>
            <div class="admin-actions">
                <button type="button" class="primary-btn small-btn" data-admin-action="export-users">Export User Data</button>
                <button type="button" class="secondary-btn small-btn" data-admin-action="export-analytics">Export Session Analytics</button>
                <button type="button" class="ghost-btn small-btn" data-admin-action="generate-reports">Queue Reports</button>
                <button type="button" class="ghost-btn small-btn" data-admin-action="clear-data">Clear All Data</button>
            </div>
        </section>
        <section class="surface">
            <div class="surface-heading">
                <div>
                    <p class="eyebrow">Admin Notifications</p>
                    <h4>Sent to ${escapeHtml(ADMIN_EMAIL)}</h4>
                </div>
            </div>
            <div class="admin-report-list">
                ${reports.length ? reports.map((report) => `
                    <div class="admin-report-row">
                        <strong>${escapeHtml(report.subject)}</strong>
                        <div class="recent-item-meta">${escapeHtml(report.body)}</div>
                        <div class="recent-item-meta">${formatDateTime(report.createdAt)}</div>
                    </div>
                `).join("") : `<div class="empty-state">No queued admin reports yet.</div>`}
            </div>
        </section>
    `;
}

function renderProfile(metrics) {
    const avatar = getAvatarById(state.currentUser.avatar);
    dom.profileAvatarHero.textContent = avatar.symbol;
    dom.profileDisplayName.textContent = state.currentUser.name;
    dom.profileEmail.textContent = maskEmail(state.currentUser.email);
    dom.profileStatGrid.innerHTML = [
        buildProfileStat("Sessions", metrics.totalSessions),
        buildProfileStat("Minutes", metrics.totalMinutes),
        buildProfileStat("Streak", metrics.streak),
        buildProfileStat("Badges", metrics.badgesUnlocked)
    ].join("");
    updateFilterChips(dom.profileTabs, state.profileTab, "data-profile-tab");
    renderProfileTab(metrics);
}

function renderProfileTab(metrics) {
    if (state.profileTab === "overview") {
        const activities = buildRecentActivity(state.currentUser.id).slice(0, 6);
        dom.profileTabContent.innerHTML = `
            <section class="surface">
                <div class="surface-heading">
                    <div>
                        <p class="eyebrow">Overview</p>
                        <h4>Recent activity</h4>
                    </div>
                </div>
                <div class="brand-strip">
                    <img src="${COMPANY.logo}" alt="${COMPANY.name} logo">
                    <div>
                        <p class="eyebrow">${COMPANY.name}</p>
                        <strong>Studio Focus Pro</strong>
                        <small>Subscription active • admin reports route to ${ADMIN_EMAIL}</small>
                    </div>
                </div>
                <p>${escapeHtml(state.currentUser.bio || "Add a short bio in settings to personalize this profile.")}</p>
                <div class="activity-list">
                    ${activities.length ? activities.map((activity) => `
                        <div class="activity-row">
                            <strong>${escapeHtml(activity.title)}</strong>
                            <div class="recent-item-meta">${escapeHtml(activity.meta)}</div>
                        </div>
                    `).join("") : `<div class="empty-state">Recent activity appears after your next session.</div>`}
                </div>
            </section>
        `;
        return;
    }

    if (state.profileTab === "settings") {
        dom.profileTabContent.innerHTML = `
            <form id="profileSettingsForm" class="surface stack-form">
                <div class="surface-heading">
                    <div>
                        <p class="eyebrow">Settings</p>
                        <h4>Name, bio, and password</h4>
                    </div>
                </div>
                <label class="field">
                    <span>Display Name</span>
                    <input type="text" id="profileNameInput" maxlength="32" value="${escapeAttribute(state.currentUser.name)}">
                </label>
                <label class="field">
                    <span>Email</span>
                    <input type="text" value="${escapeAttribute(state.currentUser.email)}" disabled>
                </label>
                <label class="field">
                    <span>Bio</span>
                    <textarea id="profileBioInput" maxlength="180">${escapeHtml(state.currentUser.bio || "")}</textarea>
                </label>
                <label class="field">
                    <span>Update Password</span>
                    <input type="password" id="profilePasswordInput" placeholder="Leave blank to keep current password">
                </label>
                <p class="form-error" id="profileSettingsError"></p>
                <button type="submit" class="primary-btn small-btn">Save Settings</button>
            </form>
        `;
        return;
    }

    dom.profileTabContent.innerHTML = `
        <section class="surface privacy-list">
            <div class="surface-heading">
                <div>
                    <p class="eyebrow">Privacy</p>
                    <h4>Control visibility and mentions</h4>
                </div>
            </div>
            <label class="toggle-row">
                <span>
                    <strong>Show stats on leaderboard</strong>
                    <small>Opt in before appearing in community ranks.</small>
                </span>
                <input type="checkbox" data-privacy-toggle="showStatsOnLeaderboard" ${state.currentUser.privacy.showStatsOnLeaderboard ? "checked" : ""}>
            </label>
            <label class="toggle-row">
                <span>
                    <strong>Show achievements in Hall of Fame</strong>
                    <small>Legendary unlocks appear only when this is on.</small>
                </span>
                <input type="checkbox" data-privacy-toggle="showAchievementsInHallOfFame" ${state.currentUser.privacy.showAchievementsInHallOfFame ? "checked" : ""}>
            </label>
            <label class="toggle-row">
                <span>
                    <strong>Allow mentions in posts</strong>
                    <small>Future mentions use your display name only.</small>
                </span>
                <input type="checkbox" data-privacy-toggle="allowMentionsInPosts" ${state.currentUser.privacy.allowMentionsInPosts ? "checked" : ""}>
            </label>
        </section>
        <section class="danger-zone">
            <strong>Danger Zone</strong>
            <p>Deleting the account permanently removes users, sessions, goals, achievements, posts, and notifications tied to this profile.</p>
            <label class="field">
                <span>Type DELETE to confirm</span>
                <input type="text" id="deleteConfirmInput" placeholder="DELETE">
            </label>
            <button type="button" class="ghost-btn small-btn" id="deleteAccountBtn">Delete Account</button>
        </section>
    `;
}

function renderAvatarModal() {
    dom.avatarCategoryGrid.innerHTML = AVATAR_GROUPS.map((group) => `
        <section class="avatar-group">
            <p class="eyebrow">${group.name}</p>
            <div class="avatar-grid">
                ${group.items.map((item) => `
                    <button type="button" class="avatar-option ${state.selectedAvatarId === item.id ? "active" : ""}" data-avatar-id="${item.id}">
                        <span class="avatar-symbol">${item.symbol}</span>
                        <small>${item.label}</small>
                    </button>
                `).join("")}
            </div>
        </section>
    `).join("");
}

function updateModeButtons() {
    const buttons = Array.from(dom.modeRow.querySelectorAll(".mode-pill"));
    buttons.forEach((button) => {
        button.classList.toggle("active", button.dataset.mode === state.timer.modeId);
    });
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timer.remainingSeconds / 60);
    const seconds = state.timer.remainingSeconds % 60;
    dom.timeDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    const progressRatio = state.timer.totalSeconds ? state.timer.remainingSeconds / state.timer.totalSeconds : 1;
    const circumference = 2 * Math.PI * 94;
    dom.timerProgress.style.strokeDasharray = String(circumference);
    dom.timerProgress.style.strokeDashoffset = String(circumference * (1 - progressRatio));
    dom.timerProgress.style.stroke = progressRatio > 0.5 ? "var(--green)" : progressRatio > 0.2 ? "var(--yellow)" : "var(--red)";

    if (state.timer.isRunning) {
        dom.timerStatus.textContent = `Focusing on ${state.timer.taskName || "your task"}`;
    } else if (state.timer.isPaused) {
        dom.timerStatus.textContent = "Paused";
    } else {
        dom.timerStatus.textContent = `Ready • break ${getCurrentMode().breakMinutes}m`;
    }

    dom.startBtn.classList.toggle("hidden", state.timer.isRunning || state.timer.isPaused);
    dom.pauseBtn.classList.toggle("hidden", !state.timer.isRunning);
    dom.resumeBtn.classList.toggle("hidden", !state.timer.isPaused);
}

function handleModeSelect(event) {
    const button = event.target.closest("[data-mode]");
    if (!button || state.timer.isRunning || state.timer.isPaused) {
        return;
    }

    const modeId = button.dataset.mode;
    if (modeId === "custom") {
        const focusValue = Number(window.prompt("Focus minutes", String(state.timer.focusMinutes || 20)));
        const breakValue = Number(window.prompt("Break minutes", String(state.timer.breakMinutes || 5)));
        if (!Number.isFinite(focusValue) || focusValue < 1) {
            return;
        }
        state.timer.modeId = "custom";
        state.timer.focusMinutes = Math.min(Math.max(Math.round(focusValue), 1), 180);
        state.timer.breakMinutes = Number.isFinite(breakValue) && breakValue > 0 ? Math.min(Math.round(breakValue), 60) : 5;
    } else {
        const mode = TIMER_MODES[modeId];
        state.timer.modeId = modeId;
        state.timer.focusMinutes = mode.focusMinutes;
        state.timer.breakMinutes = mode.breakMinutes;
    }

    state.timer.totalSeconds = state.timer.focusMinutes * 60;
    state.timer.remainingSeconds = state.timer.totalSeconds;
    updateModeButtons();
    dom.currentModeLabel.textContent = getCurrentMode().label;
    updateTimerDisplay();
}

function getCurrentMode() {
    if (state.timer.modeId === "custom") {
        return {
            id: "custom",
            label: `${state.timer.focusMinutes}/${state.timer.breakMinutes} Custom`,
            focusMinutes: state.timer.focusMinutes,
            breakMinutes: state.timer.breakMinutes
        };
    }
    return TIMER_MODES[state.timer.modeId];
}

function getAiState() {
    if (!state.currentUser) {
        return { ...DEFAULT_AI_PREFS };
    }
    state.currentUser.ai = {
        ...DEFAULT_AI_PREFS,
        ...(state.currentUser.ai || {})
    };
    return state.currentUser.ai;
}

function getActiveStudyTopic() {
    const aiTopic = getAiState().topic.trim();
    const liveTask = state.timer.taskName || dom.taskInput.value.trim();
    return aiTopic || liveTask || "your current study block";
}

function handleAiModeSelect(event) {
    const button = event.target.closest("[data-ai-mode]");
    if (!button || !state.currentUser) {
        return;
    }

    getAiState().mode = button.dataset.aiMode;
    persistUser(state.currentUser);
    renderAiControls();
    renderOnethingAI(state.liveMetrics || buildMetrics(state.currentUser.id));
}

function handleAiTopicInput() {
    if (!state.currentUser) {
        return;
    }

    state.currentUser.ai.topic = dom.aiTopicInput.value.slice(0, 60);
    persistUser(state.currentUser);
    renderOnethingAI(state.liveMetrics || buildMetrics(state.currentUser.id));
}

function dismissFocusSetupIntro() {
    if (!state.currentUser) {
        return;
    }

    state.currentUser.ai.introDismissed = true;
    persistUser(state.currentUser);
    renderFocusSetupIntro();
}

function showFocusSetupIntro() {
    if (!state.currentUser) {
        return;
    }

    state.currentUser.ai.introDismissed = false;
    persistUser(state.currentUser);
    renderFocusSetupIntro();
}

function handleSwipeTrackKeydown(event) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
        return;
    }
    event.preventDefault();
    dom.swipeControlTrack.scrollBy({
        left: event.key === "ArrowRight" ? 320 : -320,
        behavior: "smooth"
    });
}

function handleSlideStart() {
    if (state.timer.isRunning || state.timer.isPaused) {
        dom.slideStart.value = "0";
        return;
    }
    if (Number(dom.slideStart.value) >= 92) {
        startTimer();
        window.setTimeout(resetSlideStart, 180);
    }
}

function resetSlideStart() {
    dom.slideStart.value = "0";
}

function startTimer() {
    if (!state.currentUser) {
        return;
    }

    const taskName = dom.taskInput.value.trim();
    if (!taskName) {
        dom.taskInput.focus();
        return;
    }

    resumeAudioContext();
    state.timer.taskName = taskName;
    state.timer.isRunning = true;
    state.timer.isPaused = false;
    state.timer.startedAt = new Date().toISOString();
    stopTimerInterval();
    state.timer.intervalId = window.setInterval(() => {
        if (state.timer.remainingSeconds > 0) {
            state.timer.remainingSeconds -= 1;
            updateTimerDisplay();
        } else {
            completeTimer();
        }
    }, 1000);
    updateTimerDisplay();
}

function pauseTimer() {
    if (!state.timer.isRunning) {
        return;
    }
    stopTimerInterval();
    state.timer.isRunning = false;
    state.timer.isPaused = true;
    updateTimerDisplay();
}

function resumeTimer() {
    if (!state.timer.isPaused) {
        return;
    }
    state.timer.isRunning = true;
    state.timer.isPaused = false;
    stopTimerInterval();
    state.timer.intervalId = window.setInterval(() => {
        if (state.timer.remainingSeconds > 0) {
            state.timer.remainingSeconds -= 1;
            updateTimerDisplay();
        } else {
            completeTimer();
        }
    }, 1000);
    updateTimerDisplay();
}

function resetTimer() {
    const elapsed = state.timer.totalSeconds - state.timer.remainingSeconds;
    if ((state.timer.isRunning || state.timer.isPaused) && elapsed > 0) {
        recordSession(false);
    }
    resetTimerState();
    renderAll();
}

function resetTimerState() {
    stopTimerInterval();
    state.timer.isRunning = false;
    state.timer.isPaused = false;
    state.timer.totalSeconds = state.timer.focusMinutes * 60;
    state.timer.remainingSeconds = state.timer.totalSeconds;
    state.timer.taskName = "";
    state.timer.startedAt = null;
    updateTimerDisplay();
}

function stopTimerInterval() {
    if (state.timer.intervalId) {
        clearInterval(state.timer.intervalId);
        state.timer.intervalId = null;
    }
}

function completeTimer() {
    recordSession(true);
    const mode = getCurrentMode();
    dom.completionMessage.textContent = `${state.timer.taskName} is done. Take ${mode.breakMinutes} minutes, then come back for the next block.`;
    state.timer.remainingSeconds = 0;
    updateTimerDisplay();
    triggerCompletionAlert();
    createConfetti();
    dom.completionModal.classList.remove("hidden");
    resetTimerState();
    renderAll();
}

function recordSession(completed) {
    if (!state.currentUser) {
        return;
    }

    const elapsedSeconds = completed ? state.timer.totalSeconds : state.timer.totalSeconds - state.timer.remainingSeconds;
    if (elapsedSeconds <= 0) {
        return;
    }

    const sessions = getSessions();
    sessions.push({
        id: createId("session"),
        userId: state.currentUser.id,
        taskName: state.timer.taskName || dom.taskInput.value.trim() || "Untitled focus block",
        duration: elapsedSeconds,
        completionStatus: completed,
        mode: state.timer.modeId,
        plannedDuration: state.timer.totalSeconds,
        date: new Date().toISOString()
    });
    setTable(STORAGE_KEYS.sessions, sessions);
    dom.taskInput.value = "";
    dom.charCount.textContent = "0";
    if (completed) {
        addNotification(state.currentUser.id, "session", "Session complete", `Completed ${secondsToMinutes(elapsedSeconds)} minutes on ${state.timer.taskName || "your task"}.`, `session-complete-${Date.now()}`);
    }
}

function createConfetti() {
    const colors = ["#19d47b", "#ffd54d", "#4da3ff", "#ff5f5f", "#a56eff"];
    Array.from({ length: 44 }).forEach((_, index) => {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.background = colors[index % colors.length];
        piece.style.transform = `translateY(0) rotate(${Math.random() * 120}deg)`;
        piece.style.animationDuration = `${2 + Math.random() * 1.2}s`;
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 3200);
    });
}

function dismissCompletionAlert() {
    stopCompletionAlert();
    dom.completionModal.classList.add("hidden");
}

function handleNotificationPrefChange() {
    state.currentUser.notificationPrefs.soundEnabled = dom.soundToggle.checked;
    state.currentUser.notificationPrefs.flashEnabled = dom.flashToggle.checked;
    state.currentUser.notificationPrefs.ringtoneId = dom.ringtoneSelect.value;
    persistUser(state.currentUser);
}

function applyNotificationPrefsToControls() {
    const prefs = state.currentUser ? state.currentUser.notificationPrefs : DEFAULT_NOTIFICATION_PREFS;
    dom.soundToggle.checked = prefs.soundEnabled;
    dom.flashToggle.checked = prefs.flashEnabled;
    dom.ringtoneSelect.value = prefs.ringtoneId;
}

function populateRingtones() {
    dom.ringtoneSelect.innerHTML = RINGTONE_LIBRARY.map((ringtone) => `
        <option value="${ringtone.id}">${ringtone.name}</option>
    `).join("");
}

function previewAlert() {
    if (!state.currentUser) {
        return;
    }
    handleNotificationPrefChange();
    playNotificationTone(true);
    triggerPreviewFlash();
}

function triggerCompletionAlert() {
    stopCompletionAlert();
    state.completionAlertActive = true;
    if (state.currentUser.notificationPrefs.soundEnabled) {
        playNotificationTone(true);
        state.completionAlertIntervalId = window.setInterval(() => {
            if (state.completionAlertActive) {
                playNotificationTone(true);
            }
        }, getSelectedToneLoopMs());
    }
    if (state.currentUser.notificationPrefs.flashEnabled) {
        dom.screenFlash.classList.remove("hidden");
    }
}

function stopCompletionAlert() {
    state.completionAlertActive = false;
    if (state.completionAlertIntervalId) {
        clearInterval(state.completionAlertIntervalId);
        state.completionAlertIntervalId = null;
    }
    stopAllToneNodes();
    dom.screenFlash.classList.add("hidden");
    if (state.previewFlashTimeoutId) {
        clearTimeout(state.previewFlashTimeoutId);
        state.previewFlashTimeoutId = null;
    }
}

function triggerPreviewFlash() {
    dom.screenFlash.classList.remove("hidden");
    if (state.previewFlashTimeoutId) {
        clearTimeout(state.previewFlashTimeoutId);
    }
    state.previewFlashTimeoutId = window.setTimeout(() => {
        if (!state.completionAlertActive) {
            dom.screenFlash.classList.add("hidden");
        }
    }, 1500);
}

function getSelectedToneLoopMs() {
    const ringtone = getSelectedRingtone();
    const totalMs = ringtone.notes.reduce((sum, note) => sum + (note.duration + note.gap), 0) * 1000;
    return Math.max(1400, Math.round(totalMs + 350));
}

function getSelectedRingtone() {
    const prefs = state.currentUser ? state.currentUser.notificationPrefs : DEFAULT_NOTIFICATION_PREFS;
    return RINGTONE_LIBRARY.find((ringtone) => ringtone.id === prefs.ringtoneId) || RINGTONE_LIBRARY[0];
}

function getAudioContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        return null;
    }
    if (!state.audioContext) {
        state.audioContext = new AudioContextClass();
    }
    return state.audioContext;
}

function resumeAudioContext() {
    const context = getAudioContext();
    if (!context) {
        return Promise.resolve(null);
    }
    if (context.state === "suspended") {
        return context.resume().then(() => context);
    }
    return Promise.resolve(context);
}

function playNotificationTone(forcePlay) {
    if (!forcePlay && (!state.currentUser || !state.currentUser.notificationPrefs.soundEnabled)) {
        return;
    }

    const ringtone = getSelectedRingtone();
    resumeAudioContext().then((context) => {
        if (!context) {
            return;
        }
        let cursor = context.currentTime + 0.03;
        ringtone.notes.forEach((note) => {
            const oscillator = context.createOscillator();
            const gainNode = context.createGain();
            oscillator.type = note.type;
            oscillator.frequency.setValueAtTime(note.freq, cursor);
            gainNode.gain.setValueAtTime(0.0001, cursor);
            gainNode.gain.exponentialRampToValueAtTime(note.volume, cursor + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, cursor + note.duration);
            oscillator.connect(gainNode);
            gainNode.connect(context.destination);
            state.activeToneNodes.push({ oscillator, gainNode });
            oscillator.onended = () => {
                try {
                    oscillator.disconnect();
                    gainNode.disconnect();
                } catch (error) {
                    return;
                } finally {
                    state.activeToneNodes = state.activeToneNodes.filter((entry) => entry.oscillator !== oscillator);
                }
            };
            oscillator.start(cursor);
            oscillator.stop(cursor + note.duration + 0.03);
            cursor += note.duration + note.gap;
        });
    });
}

function stopAllToneNodes() {
    state.activeToneNodes.forEach((entry) => {
        try {
            entry.gainNode.gain.cancelScheduledValues(0);
            entry.gainNode.gain.setValueAtTime(0.0001, 0);
            entry.oscillator.stop();
        } catch (error) {
            return;
        }
    });
    state.activeToneNodes = [];
}

function handleParkingInput(event) {
    if (event.key !== "Enter") {
        return;
    }
    event.preventDefault();
    const value = dom.parkingInput.value.trim();
    if (!value || !state.currentUser) {
        return;
    }
    state.currentUser.parkingLot.unshift({
        id: createId("park"),
        text: value
    });
    state.currentUser.parkingLot = state.currentUser.parkingLot.slice(0, 8);
    persistUser(state.currentUser);
    dom.parkingInput.value = "";
    renderParkingLot();
}

function handleParkingChipClick(event) {
    const button = event.target.closest("[data-remove-park]");
    if (!button) {
        return;
    }
    state.currentUser.parkingLot = state.currentUser.parkingLot.filter((entry) => entry.id !== button.dataset.removePark);
    persistUser(state.currentUser);
    renderParkingLot();
}

function renderParkingLot() {
    const items = state.currentUser.parkingLot || [];
    if (!items.length) {
        dom.parkingItems.innerHTML = `<div class="empty-state">Stash side thoughts here when they show up.</div>`;
        return;
    }
    dom.parkingItems.innerHTML = items.map((entry) => `
        <span class="chip">
            ${escapeHtml(entry.text)}
            <button type="button" data-remove-park="${entry.id}">×</button>
        </span>
    `).join("");
}

function handleTaskFilterClick(event) {
    const button = event.target.closest("[data-filter]");
    if (!button) {
        return;
    }
    state.taskFilter = button.dataset.filter;
    renderRecentTasks(buildMetrics(state.currentUser.id));
}

function handleGoalSubmit(event) {
    event.preventDefault();
    const title = dom.goalInput.value.trim();
    if (!title || !state.currentUser) {
        return;
    }
    const goals = getGoals();
    goals.push({
        id: createId("goal"),
        userId: state.currentUser.id,
        title: title,
        type: "active",
        completed: false,
        creationDate: new Date().toISOString(),
        deadline: ""
    });
    setTable(STORAGE_KEYS.goals, goals);
    dom.goalInput.value = "";
    addNotification(state.currentUser.id, "goal", "Goal added", `Tracking "${title}" now.`, `goal-create-${Date.now()}`);
    renderAll();
}

function handleGoalToggle(event) {
    const checkbox = event.target.closest("input[type='checkbox'][data-goal-id]");
    if (!checkbox) {
        return;
    }
    const goals = getGoals();
    const target = goals.find((goal) => goal.id === checkbox.dataset.goalId);
    if (!target) {
        return;
    }
    target.completed = checkbox.checked;
    setTable(STORAGE_KEYS.goals, goals);
    if (target.completed) {
        addNotification(state.currentUser.id, "goal", "Goal complete", `"${target.title}" is checked off.`, `goal-complete-${target.id}`);
    }
    renderAll();
}

function handleGoalDelete(event) {
    const button = event.target.closest("[data-delete-goal]");
    if (!button) {
        return;
    }
    setTable(
        STORAGE_KEYS.goals,
        getGoals().filter((goal) => goal.id !== button.dataset.deleteGoal)
    );
    renderAll();
}

function handlePostTypeClick(event) {
    const button = event.target.closest("[data-post-type]");
    if (!button) {
        return;
    }
    state.postType = button.dataset.postType;
    renderCommunity(buildMetrics(state.currentUser.id));
}

function handlePostSubmit(event) {
    event.preventDefault();
    dom.postError.textContent = "";
    const content = dom.postContent.value.trim();
    if (!content) {
        dom.postError.textContent = "Write a short update before posting.";
        return;
    }

    const safetyIssue = detectSafetyIssue(content);
    if (safetyIssue) {
        dom.postError.textContent = safetyIssue;
        queueAdminReport("flagged-content", "Flagged community post", `${state.currentUser.name} tried to post content blocked by safety filters.`, `flagged-post-${Date.now()}`);
        addNotification(state.currentUser.id, "safety", "Post blocked", "That update looked like it might share personal information, so it was not posted.", `post-block-${Date.now()}`);
        renderNotifications();
        return;
    }

    const posts = getPosts();
    posts.push({
        id: createId("post"),
        userId: state.currentUser.id,
        postType: state.postType,
        content: content,
        anonymous: dom.anonymousPostToggle.checked,
        reactions: {
            fire: [],
            muscle: [],
            target: []
        },
        creationDate: new Date().toISOString()
    });
    setTable(STORAGE_KEYS.posts, posts);
    dom.postContent.value = "";
    dom.anonymousPostToggle.checked = false;
    addNotification(state.currentUser.id, "community", "Post shared", "Your community update is live.", `post-share-${Date.now()}`);
    renderAll();
}

function handleReactionClick(event) {
    const button = event.target.closest("[data-react-post]");
    if (!button || !state.currentUser) {
        return;
    }
    const postId = button.dataset.reactPost;
    const reactionId = button.dataset.reaction;
    const posts = getPosts();
    const post = posts.find((entry) => entry.id === postId);
    if (!post) {
        return;
    }

    const userList = Array.isArray(post.reactions[reactionId]) ? post.reactions[reactionId] : [];
    const hasReaction = userList.includes(state.currentUser.id);
    post.reactions[reactionId] = hasReaction
        ? userList.filter((id) => id !== state.currentUser.id)
        : userList.concat(state.currentUser.id);
    setTable(STORAGE_KEYS.posts, posts);

    if (post.userId !== state.currentUser.id && !hasReaction) {
        addNotification(post.userId, "reaction", "Community reaction", `${state.currentUser.name} reacted to your post with ${reactionEmoji(reactionId)}.`, `reaction-${post.id}-${reactionId}-${state.currentUser.id}`);
    }
    renderCommunity(buildMetrics(state.currentUser.id));
    renderNotifications();
}

function handleLeaderboardFilterClick(event) {
    const button = event.target.closest("[data-board-filter]");
    if (!button) {
        return;
    }
    state.leaderboardFilter = button.dataset.boardFilter;
    renderLeaderboard();
}

function openProfileModal() {
    if (!state.currentUser) {
        return;
    }
    dom.profileModal.classList.remove("hidden");
    renderProfile(buildMetrics(state.currentUser.id));
}

function closeProfileModal() {
    dom.profileModal.classList.add("hidden");
}

function handleProfileTabClick(event) {
    const button = event.target.closest("[data-profile-tab]");
    if (!button) {
        return;
    }
    state.profileTab = button.dataset.profileTab;
    renderProfile(buildMetrics(state.currentUser.id));
}

async function handleProfileContentSubmit(event) {
    if (event.target.id !== "profileSettingsForm") {
        return;
    }
    event.preventDefault();

    const nameInput = document.getElementById("profileNameInput");
    const bioInput = document.getElementById("profileBioInput");
    const passwordInput = document.getElementById("profilePasswordInput");
    const errorEl = document.getElementById("profileSettingsError");
    errorEl.textContent = "";

    if (!nameInput.value.trim()) {
        errorEl.textContent = "Display name cannot be empty.";
        return;
    }
    if (passwordInput.value && passwordInput.value.length < 6) {
        errorEl.textContent = "Updated password must be at least 6 characters.";
        return;
    }

    state.currentUser.name = nameInput.value.trim();
    state.currentUser.bio = bioInput.value.trim();
    if (passwordInput.value) {
        state.currentUser.passwordHash = await hashPassword(passwordInput.value);
    }
    persistUser(state.currentUser);
    renderAll();
    renderProfile(buildMetrics(state.currentUser.id));
}

function handleProfileContentChange(event) {
    const toggle = event.target.closest("[data-privacy-toggle]");
    if (!toggle || !state.currentUser) {
        return;
    }
    state.currentUser.privacy[toggle.dataset.privacyToggle] = toggle.checked;
    persistUser(state.currentUser);
    renderAll();
}

function handleProfileContentClick(event) {
    if (event.target.id !== "deleteAccountBtn") {
        return;
    }
    const confirmValue = document.getElementById("deleteConfirmInput");
    if (!confirmValue || confirmValue.value.trim() !== "DELETE") {
        return;
    }
    deleteCurrentAccount();
}

function openAvatarModal() {
    state.selectedAvatarId = state.currentUser.avatar;
    renderAvatarModal();
    dom.avatarModal.classList.remove("hidden");
}

function closeAvatarModal() {
    dom.avatarModal.classList.add("hidden");
}

function handleAvatarSelect(event) {
    const button = event.target.closest("[data-avatar-id]");
    if (!button) {
        return;
    }
    state.selectedAvatarId = button.dataset.avatarId;
    renderAvatarModal();
}

function saveSelectedAvatar() {
    state.currentUser.avatar = state.selectedAvatarId;
    persistUser(state.currentUser);
    closeAvatarModal();
    renderAll();
    renderProfile(buildMetrics(state.currentUser.id));
}

function handleAdminClick(event) {
    const button = event.target.closest("[data-admin-action]");
    if (!button || state.currentUser.role !== "admin") {
        return;
    }
    const action = button.dataset.adminAction;
    if (action === "export-users") {
        downloadJson("leaf-graphix-users.json", {
            users: getUsers(),
            goals: getGoals(),
            achievements: getAchievements(),
            notifications: getNotifications()
        });
        return;
    }
    if (action === "export-analytics") {
        downloadJson("leaf-graphix-session-analytics.json", buildAnalyticsExport());
        return;
    }
    if (action === "generate-reports") {
        queueAdminReportsNow();
        renderAdmin(buildMetrics(state.currentUser.id));
        return;
    }
    if (action === "clear-data") {
        const firstConfirm = window.confirm("Clear all local data?");
        if (!firstConfirm) {
            return;
        }
        const typed = window.prompt("Type CLEAR LEAF GRAPHIX DATA to confirm");
        if (typed !== "CLEAR LEAF GRAPHIX DATA") {
            return;
        }
        clearAllData();
    }
}

function handleNavClick(event) {
    const button = event.target.closest("[data-target]");
    if (!button) {
        return;
    }
    scrollToSection(button.dataset.target);
}

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) {
        return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    dom.sectionNav.classList.remove("open");
    dom.navChips.forEach((chip) => {
        chip.classList.toggle("active", chip.dataset.target === id);
    });
}

function handleGlobalKeydown(event) {
    if (event.key === "Escape") {
        closeAvatarModal();
        closeProfileModal();
        dismissCompletionAlert();
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function runScheduledChecks() {
    if (!state.currentUser) {
        return;
    }
    ensureScheduledNotifications();
    ensureAdminReports();
    renderNotifications();
    if (state.currentUser.role === "admin") {
        renderAdmin(buildMetrics(state.currentUser.id));
    }
}

function ensureScheduledNotifications() {
    if (!state.currentUser) {
        return;
    }

    const metrics = buildMetrics(state.currentUser.id);
    const now = new Date();
    const todayKey = dayKey(now);
    const currentWeekKey = weekKey(now);

    if (metrics.streak > 0 && !metrics.focusedToday && metrics.lastFocusDayKey === todayKey - 86400000) {
        addNotification(
            state.currentUser.id,
            "streak",
            "Streak at risk",
            "You have a live streak and no focus block logged today.",
            `streak-risk-${todayKey}`
        );
    }

    [15, 18, 21].forEach((hour) => {
        if (now.getHours() >= hour && metrics.incompleteGoals > 0) {
            addNotification(
                state.currentUser.id,
                "goal-reminder",
                "Goal reminder",
                `${metrics.incompleteGoals} active goals still need attention.`,
                `goal-reminder-${todayKey}-${hour}`
            );
        }
    });

    if (metrics.totalSessions > 0) {
        addNotification(
            state.currentUser.id,
            "weekly-summary",
            "Weekly summary",
            `This week: ${metrics.thisWeekMinutes} focused minutes across ${metrics.thisWeekSessions} sessions.`,
            `weekly-summary-${currentWeekKey}`
        );
    }

    addNotification(
        state.currentUser.id,
        "safety",
        "Weekly safety reminder",
        "Keep posts free of personal information, contact details, and real names.",
        `weekly-safety-${currentWeekKey}`
    );

    updateLeaderboardRankNotification();
}

function updateLeaderboardRankNotification() {
    if (!state.currentUser.privacy.showStatsOnLeaderboard) {
        return;
    }
    const entries = getLeaderboardEntries("all");
    const rank = entries.findIndex((entry) => entry.userId === state.currentUser.id);
    if (rank === -1) {
        return;
    }
    const previousRank = state.currentUser.meta.lastLeaderboardRank;
    if (previousRank !== null && previousRank !== rank + 1) {
        addNotification(
            state.currentUser.id,
            "leaderboard",
            "Leaderboard shift",
            `Your all-time rank moved from ${previousRank} to ${rank + 1}.`,
            `leaderboard-change-${dayKey(new Date())}-${rank + 1}`
        );
    }
    state.currentUser.meta.lastLeaderboardRank = rank + 1;
    persistUser(state.currentUser);
}

function ensureAdminReports() {
    const today = dayKey(new Date());
    const currentWeek = weekKey(new Date());
    const adminMetrics = buildAdminMetrics();
    queueAdminReport(
        "daily-digest",
        "Daily digest of new users and activity",
        `${adminMetrics.newUsersToday} new users and ${adminMetrics.sessionsToday} sessions today.`,
        `daily-digest-${today}`
    );
    queueAdminReport(
        "weekly-growth",
        "Weekly revenue and growth summary",
        `Weekly growth ${adminMetrics.weeklyGrowth}% with revenue proxy $${adminMetrics.revenueProxy}.`,
        `weekly-growth-${currentWeek}`
    );
}

function queueAdminReportsNow() {
    const metrics = buildAdminMetrics();
    queueAdminReport(
        "manual-export",
        "User data export requested",
        `Manual export requested by ${state.currentUser.name}.`,
        `manual-export-${Date.now()}`
    );
    queueAdminReport(
        "manual-analytics",
        "Session analytics export requested",
        `${metrics.totalSessions} sessions currently stored for export.`,
        `manual-analytics-${Date.now()}`
    );
}

function syncAchievementUnlocks(metrics) {
    const table = getAchievements();
    let changed = false;

    const evaluated = ACHIEVEMENT_DEFS.map((definition) => {
        const unlocked = definition.unlocked(metrics);
        const existing = table.find((entry) => entry.userId === state.currentUser.id && entry.achievementId === definition.id);
        if (unlocked && !existing) {
            const record = {
                id: createId("achievement"),
                userId: state.currentUser.id,
                achievementId: definition.id,
                unlockDate: new Date().toISOString()
            };
            table.push(record);
            changed = true;
            addNotification(
                state.currentUser.id,
                "achievement",
                "Achievement unlocked",
                `${definition.name} is now unlocked.`,
                `achievement-${definition.id}-${state.currentUser.id}`
            );
            if (definition.tier === "legendary") {
                queueAdminReport(
                    "legendary-achievement",
                    "Legendary achievement unlocked",
                    `${state.currentUser.name} unlocked ${definition.name}.`,
                    `legendary-${definition.id}-${state.currentUser.id}`
                );
            }
            return {
                ...definition,
                unlocked: true,
                progress: 100,
                unlockDate: record.unlockDate
            };
        }
        return {
            ...definition,
            unlocked: Boolean(existing),
            progress: existing ? 100 : definition.progress(metrics),
            unlockDate: existing ? existing.unlockDate : ""
        };
    });

    if (changed) {
        setTable(STORAGE_KEYS.achievements, table);
    }
    return evaluated;
}

function buildMetrics(userId) {
    const sessions = getUserSessions(userId).sort((first, second) => new Date(second.date) - new Date(first.date));
    const completedSessions = sessions.filter((session) => session.completionStatus);
    const totalMinutes = totalSessionMinutes(sessions);
    const todayKey = dayKey(new Date());
    const last7Days = buildLast7Days(sessions);
    const last8Weeks = buildLast8Weeks(sessions);
    const achievements = getAchievements().filter((entry) => entry.userId === userId);
    const goals = getUserGoals(userId);
    const completedGoals = goals.filter((goal) => goal.completed).length;
    const dayKeysThisMonth = new Set(
        completedSessions
            .filter((session) => {
                const date = new Date(session.date);
                const now = new Date();
                return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
            })
            .map((session) => dayKey(session.date))
    );

    return {
        totalSessions: sessions.length,
        completedSessions: completedSessions.length,
        incompleteSessions: sessions.length - completedSessions.length,
        totalMinutes: totalMinutes,
        focusHours: (totalMinutes / 60).toFixed(1),
        completionRate: sessions.length ? Math.round((completedSessions.length / sessions.length) * 100) : 0,
        streak: calculateStreak(completedSessions),
        focusedToday: completedSessions.some((session) => dayKey(session.date) === todayKey),
        lastFocusDayKey: completedSessions.length ? dayKey(completedSessions[0].date) : 0,
        todayMinutes: totalSessionMinutes(sessions.filter((session) => dayKey(session.date) === todayKey)),
        todaySessions: sessions.filter((session) => dayKey(session.date) === todayKey).length,
        thisWeekMinutes: totalSessionMinutes(filterSessionsByRange(sessions, "week")),
        thisWeekSessions: filterSessionsByRange(sessions, "week").length,
        last7Days: last7Days,
        last8Weeks: last8Weeks,
        recentTasks: sessions,
        totalGoals: goals.length,
        completedGoals: completedGoals,
        incompleteGoals: goals.length - completedGoals,
        badgesUnlocked: achievements.length,
        earlyBirdUnlocked: completedSessions.some((session) => new Date(session.date).getHours() < 7),
        nightOwlUnlocked: completedSessions.some((session) => {
            const hour = new Date(session.date).getHours();
            return hour >= 22 || hour < 4;
        }),
        monthActiveDays: dayKeysThisMonth.size,
        longestSessionMinutes: Math.max(...sessions.map((session) => secondsToMinutes(session.duration)), 0)
    };
}

function buildAdminMetrics() {
    const users = getUsers();
    const sessions = getSessions();
    const today = dayKey(new Date());
    const weekSessions = filterSessionsByRange(sessions, "week");
    const weekAgoUsers = users.filter((user) => dayKey(user.creationDate) >= today - 86400000 * 6);
    const previousWeekUsers = users.filter((user) => dayKey(user.creationDate) < today - 86400000 * 6);
    const revenueProxy = users.length * 9;
    return {
        totalUsers: users.length,
        totalSessions: sessions.length,
        completedSessions: sessions.filter((session) => session.completionStatus).length,
        dailyActiveUsers: new Set(sessions.filter((session) => dayKey(session.date) === today).map((session) => session.userId)).size,
        weeklyActiveUsers: new Set(weekSessions.map((session) => session.userId)).size,
        sessionsToday: sessions.filter((session) => dayKey(session.date) === today).length,
        newUsersToday: users.filter((user) => dayKey(user.creationDate) === today).length,
        weeklyGrowth: previousWeekUsers.length ? Math.round((weekAgoUsers.length / previousWeekUsers.length) * 100) : weekAgoUsers.length * 100,
        revenueProxy: revenueProxy,
        growthSeries: buildGrowthSeries(users)
    };
}

function buildGrowthSeries(users) {
    return Array.from({ length: 7 }).map((_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - index));
        const key = dayKey(date);
        return {
            label: formatShortDay(date),
            count: users.filter((user) => dayKey(user.creationDate) === key).length
        };
    });
}

function buildLast7Days(sessions) {
    return Array.from({ length: 7 }).map((_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - index));
        const key = dayKey(date);
        return {
            label: formatShortDay(date),
            minutes: totalSessionMinutes(sessions.filter((session) => dayKey(session.date) === key))
        };
    });
}

function buildLast8Weeks(sessions) {
    return Array.from({ length: 8 }).map((_, index) => {
        const date = startOfWeek(new Date());
        date.setDate(date.getDate() - (7 * (7 - index)));
        const key = weekKey(date);
        return {
            label: formatWeekLabel(key),
            minutes: totalSessionMinutes(sessions.filter((session) => weekKey(session.date) === key))
        };
    });
}

function buildRecentActivity(userId) {
    const sessions = getUserSessions(userId).slice(0, 4).map((session) => ({
        date: session.date,
        title: session.completionStatus ? "Completed focus session" : "Ended session early",
        meta: `${session.taskName} • ${secondsToMinutes(session.duration)} minutes`
    }));
    const goals = getUserGoals(userId).slice(0, 2).map((goal) => ({
        date: goal.creationDate,
        title: goal.completed ? "Goal completed" : "Goal added",
        meta: goal.title
    }));
    const achievements = getAchievements().filter((entry) => entry.userId === userId).slice(0, 2).map((entry) => {
        const def = ACHIEVEMENT_DEFS.find((achievement) => achievement.id === entry.achievementId);
        return {
            date: entry.unlockDate,
            title: "Achievement unlocked",
            meta: def ? def.name : entry.achievementId
        };
    });
    return sessions.concat(goals, achievements).sort((first, second) => new Date(second.date) - new Date(first.date));
}

function getLeaderboardEntries(filter) {
    return getUsers()
        .filter((user) => user.privacy.showStatsOnLeaderboard)
        .map((user) => {
            const sessions = filterSessionsByRange(getUserSessions(user.id), filter);
            const minutes = totalSessionMinutes(sessions);
            const streak = calculateStreak(getUserSessions(user.id).filter((session) => session.completionStatus));
            return {
                userId: user.id,
                name: user.name,
                avatar: user.avatar,
                minutes: minutes,
                streak: streak,
                scoreLabel: `${minutes}m`
            };
        })
        .sort((first, second) => second.minutes - first.minutes);
}

function filterSessionsByRange(sessions, range) {
    if (range === "all") {
        return sessions;
    }
    const now = new Date();
    if (range === "week") {
        const currentWeek = weekKey(now);
        return sessions.filter((session) => weekKey(session.date) === currentWeek);
    }
    const month = now.getMonth();
    const year = now.getFullYear();
    return sessions.filter((session) => {
        const date = new Date(session.date);
        return date.getMonth() === month && date.getFullYear() === year;
    });
}

function calculateStreak(completedSessions) {
    if (!completedSessions.length) {
        return 0;
    }
    const uniqueDays = Array.from(new Set(completedSessions.map((session) => dayKey(session.date)))).sort((first, second) => second - first);
    const today = dayKey(new Date());
    if (uniqueDays[0] !== today && uniqueDays[0] !== today - 86400000) {
        return 0;
    }
    let streak = 1;
    for (let index = 0; index < uniqueDays.length - 1; index += 1) {
        if (uniqueDays[index] - uniqueDays[index + 1] === 86400000) {
            streak += 1;
        } else {
            break;
        }
    }
    return streak;
}

function buildAnalyticsExport() {
    const users = getUsers();
    return {
        generatedAt: new Date().toISOString(),
        company: COMPANY.name,
        totalUsers: users.length,
        totalSessions: getSessions().length,
        userSummaries: users.map((user) => {
            const metrics = buildMetrics(user.id);
            return {
                userId: user.id,
                displayName: user.name,
                totalSessions: metrics.totalSessions,
                totalMinutes: metrics.totalMinutes,
                streak: metrics.streak,
                completionRate: metrics.completionRate
            };
        })
    };
}

function deleteCurrentAccount() {
    const userId = state.currentUser.id;
    setTable(STORAGE_KEYS.users, getUsers().filter((user) => user.id !== userId));
    setTable(STORAGE_KEYS.sessions, getSessions().filter((entry) => entry.userId !== userId));
    setTable(STORAGE_KEYS.goals, getGoals().filter((entry) => entry.userId !== userId));
    setTable(STORAGE_KEYS.achievements, getAchievements().filter((entry) => entry.userId !== userId));
    setTable(STORAGE_KEYS.posts, getPosts().filter((entry) => entry.userId !== userId));
    setTable(STORAGE_KEYS.notifications, getNotifications().filter((entry) => entry.userId !== userId));
    localStorage.removeItem(STORAGE_KEYS.currentUserId);
    state.currentUser = null;
    closeProfileModal();
    showAuth();
}

function clearAllData() {
    Object.values(STORAGE_KEYS).forEach((key) => {
        localStorage.removeItem(key);
    });
    state.currentUser = null;
    stopCompletionAlert();
    showAuth();
}

function queueAdminReport(type, subject, body, scopeKey) {
    const reports = getAdminReports();
    if (scopeKey && reports.some((entry) => entry.scopeKey === scopeKey)) {
        return;
    }
    reports.push({
        id: createId("report"),
        type: type,
        subject: subject,
        body: body,
        toEmail: ADMIN_EMAIL,
        createdAt: new Date().toISOString(),
        scopeKey: scopeKey || ""
    });
    setTable(STORAGE_KEYS.adminReports, reports.slice(-100));
}

function addNotification(userId, type, title, message, scopeKey) {
    const notifications = getNotifications();
    if (scopeKey && notifications.some((entry) => entry.scopeKey === scopeKey && entry.userId === userId)) {
        return;
    }
    notifications.push({
        id: createId("note"),
        userId: userId,
        type: type,
        title: title,
        message: message,
        createdAt: new Date().toISOString(),
        read: false,
        scopeKey: scopeKey || ""
    });
    setTable(STORAGE_KEYS.notifications, notifications.slice(-200));
}

function markNotificationsRead() {
    if (!state.currentUser) {
        return;
    }
    const notifications = getNotifications().map((entry) => {
        if (entry.userId === state.currentUser.id) {
            return { ...entry, read: true };
        }
        return entry;
    });
    setTable(STORAGE_KEYS.notifications, notifications);
    renderNotifications();
}

function detectSafetyIssue(content) {
    const patterns = [
        /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
        /\b(?:\+?\d[\d\s-]{7,}\d)\b/,
        /(instagram|facebook|discord|telegram|whatsapp|snapchat|tiktok|http|www\.)/i
    ];
    if (patterns.some((pattern) => pattern.test(content))) {
        return "That post looks like it may contain personal information or external contact details.";
    }
    return "";
}

function getUsers() {
    return getTable(STORAGE_KEYS.users).map((user) => withUserDefaults(user));
}

function getUserById(userId) {
    return getUsers().find((user) => user.id === userId);
}

function getSessions() {
    return getTable(STORAGE_KEYS.sessions);
}

function getGoals() {
    return getTable(STORAGE_KEYS.goals);
}

function getAchievements() {
    return getTable(STORAGE_KEYS.achievements);
}

function getPosts() {
    return getTable(STORAGE_KEYS.posts);
}

function getNotifications() {
    return getTable(STORAGE_KEYS.notifications);
}

function getAdminReports() {
    return getTable(STORAGE_KEYS.adminReports);
}

function getUserGoals(userId) {
    return getGoals().filter((goal) => goal.userId === userId);
}

function getUserSessions(userId) {
    return getSessions().filter((session) => session.userId === userId);
}

function getUserNotifications(userId) {
    return getNotifications().filter((notification) => notification.userId === userId);
}

function persistUser(user) {
    const users = getUsers();
    const nextUser = withUserDefaults(user);
    const index = users.findIndex((entry) => entry.id === nextUser.id);
    if (index === -1) {
        users.push(nextUser);
    } else {
        users[index] = nextUser;
    }
    setTable(STORAGE_KEYS.users, users);
    state.currentUser = nextUser;
}

function withUserDefaults(user) {
    const avatar = user.avatar || AVATAR_GROUPS[0].items[0].id;
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        avatar: avatar,
        bio: user.bio || "",
        role: user.role || (user.email === ADMIN_EMAIL ? "admin" : "member"),
        creationDate: user.creationDate || new Date().toISOString(),
        privacy: {
            ...DEFAULT_PRIVACY,
            ...(user.privacy || {})
        },
        notificationPrefs: {
            ...DEFAULT_NOTIFICATION_PREFS,
            ...(user.notificationPrefs || {})
        },
        ai: {
            ...DEFAULT_AI_PREFS,
            ...(user.ai || {})
        },
        parkingLot: Array.isArray(user.parkingLot) ? user.parkingLot : [],
        meta: {
            lastLeaderboardRank: null,
            ...(user.meta || {})
        },
        lastLogin: user.lastLogin || ""
    };
}

function getTable(key) {
    try {
        return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (error) {
        return [];
    }
}

function setTable(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

async function hashPassword(password) {
    if (window.crypto && window.crypto.subtle) {
        const bytes = new TextEncoder().encode(password);
        const digest = await window.crypto.subtle.digest("SHA-256", bytes);
        return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    }
    return btoa(password.split("").reverse().join(""));
}

function createId(prefix) {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function buildStatCard(label, value, note) {
    return `
        <article class="stat-card">
            <span>${label}</span>
            <strong>${value}</strong>
            <span>${note}</span>
        </article>
    `;
}

function buildProfileStat(label, value) {
    return `
        <article class="profile-stat">
            <strong>${value}</strong>
            <span>${label}</span>
        </article>
    `;
}

function updateFilterChips(container, activeValue, attributeName) {
    Array.from(container.querySelectorAll(`[${attributeName}]`)).forEach((button) => {
        button.classList.toggle("active", button.getAttribute(attributeName) === activeValue);
    });
}

function getAvatarById(avatarId) {
    for (const group of AVATAR_GROUPS) {
        const avatar = group.items.find((entry) => entry.id === avatarId);
        if (avatar) {
            return avatar;
        }
    }
    return AVATAR_GROUPS[0].items[0];
}

function getModeLabel(modeId) {
    if (modeId === "custom") {
        return "Custom";
    }
    return TIMER_MODES[modeId] ? TIMER_MODES[modeId].label : "Unknown";
}

function totalSessionMinutes(sessions) {
    return sessions.reduce((total, session) => total + secondsToMinutes(session.duration), 0);
}

function secondsToMinutes(seconds) {
    return Math.round(seconds / 60);
}

function formatClockLabel(totalSeconds) {
    const safeSeconds = Math.max(0, Number(totalSeconds) || 0);
    const minutes = Math.floor(safeSeconds / 60);
    const seconds = safeSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function ratioProgress(value, target) {
    return Math.max(0, Math.min(100, Math.round((value / target) * 100)));
}

function dayKey(value) {
    const date = new Date(value);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function weekKey(value) {
    return startOfWeek(value).getTime();
}

function startOfWeek(value) {
    const date = new Date(value);
    const day = date.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    date.setDate(date.getDate() + diff);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatShortDay(value) {
    return new Date(value).toLocaleDateString(undefined, { weekday: "short" });
}

function formatWeekLabel(value) {
    return new Date(Number(value)).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function formatDate(value) {
    return new Date(value).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}

function formatDateTime(value) {
    return new Date(value).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}

function maskEmail(email) {
    const [name, domain] = email.split("@");
    if (!domain) {
        return email;
    }
    return `${name.slice(0, 1)}***@${domain}`;
}

function reactionEmoji(reactionId) {
    const reaction = REACTION_TYPES.find((entry) => entry.id === reactionId);
    return reaction ? reaction.emoji : "";
}

function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (character) => {
        const map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return map[character];
    });
}

function escapeAttribute(value) {
    return escapeHtml(value).replace(/"/g, "&quot;");
}

function downloadJson(filename, payload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}
