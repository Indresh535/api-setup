class Visit {
    constructor(userId, visitDate, pageViews, sessionDuration) {
        this.user_id = userId;
        this.visit_date = visitDate;
        this.page_views = pageViews;
        this.session_duration = sessionDuration;
    }
}

module.exports = Visit;
