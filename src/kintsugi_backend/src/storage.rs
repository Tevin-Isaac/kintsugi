use std::cell::RefCell;
use crate::models::Report;

thread_local! {
    pub static REPORTS: RefCell<Vec<Report>> = RefCell::new(Vec::new());
}

pub fn add_report(mut report: Report) -> u64 {
    REPORTS.with(|reports| {
        let mut reports = reports.borrow_mut();
        report.id = reports.len() as u64 + 1; // Set the ID based on current length
        reports.push(report.clone());
        report.id
    })
}

pub fn get_report(id: u64) -> Option<Report> {
    REPORTS.with(|reports| reports.borrow().iter().find(|&r| r.id == id).cloned())
}

pub fn fetch_reports() -> Vec<Report> {
    REPORTS.with(|reports| reports.borrow().clone())
}