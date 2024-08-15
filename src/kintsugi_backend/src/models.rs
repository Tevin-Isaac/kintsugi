use serde::{Deserialize, Serialize};
use candid::CandidType;

#[derive(Serialize, Deserialize, Clone, CandidType)]
pub struct Report {
    pub id: u64,
    pub incident_type: String,
    pub description: String,
    pub date: String,
    pub location: String,
}