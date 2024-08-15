use crate::models::Report; // Use the Report struct from the models module
use crate::storage::{add_report, fetch_reports, get_report};
use ic_cdk_macros::*;

#[update]
fn create_report(incident_type: String, description: String, date: String, location: String) -> u64 {
    let report = Report {
        id: 0, // This will be set in storage (and updated to a unique ID)
        incident_type,
        description,
        date,
        location,
    };
    add_report(report)
}

#[query]
fn get_report_handler(id: u64) -> Option<Report> {
    get_report(id)
}

#[query]
fn fetch_reports_handler() -> Vec<Report> {
    fetch_reports()
}