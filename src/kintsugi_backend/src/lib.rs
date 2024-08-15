mod models;
mod storage;
mod handlers;

use ic_cdk_macros::*;
use crate::storage::add_report;
use crate::models::Report;

#[init]
fn init() {
    // Initialize any state if necessary

    let initial_report = Report {
        id: 1,
        incident_type: "Sample Incident".to_string(),
        description: "This is a sample report.".to_string(),
        date: "2024-08-14".to_string(),
        location: "Nairobi, Kenya".to_string(),
    };

    add_report(initial_report);

    thread_local! {
        static MAX_REPORTS: u64 = 1000;
    }
}