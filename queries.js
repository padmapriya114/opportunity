const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertopportunity = (request, response) => {
const {id,lead_userId,lead_fi_Id,lead_name,currentBalanceInPennies,dueBy,retaining,location_city,location_state,location_street,rate,term,description,amortization,grading,leadFee_serviceFee,leadfee_flatFeeInPennies,opportunity_status_id,percentFunded,percentCommitted,contractId,resourceType,created,updated,loan_id} = request.body
 pool.query( "INSERT INTO cbanc.opportunity (id,lead_userId,lead_fi_Id,lead_name,currentBalanceInPennies,dueBy,retaining,location_city,location_state,location_street,rate,term,description,amortization,grading,leadFee_serviceFee,leadfee_flatFeeInPennies,opportunity_status_id,percentFunded,percentCommitted,contractId,resourceType,created,update,loan_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)",[id,lead_userId,lead_fi_Id,lead_name,currentBalanceInPennies,dueBy,retaining,location_city,location_state,location_street,rate,term,description,amortization,grading,leadFee_serviceFee,leadfee_flatFeeInPennies,opportunity_status_id,percentFunded,percentCommitted,contractId,resourceType,created,updated,loan_id],(error, results) => {
   if (error) {
     throw error
   }
   response.status(201).send('A new row is inserted in opportunity')
   })
   }



module.exports = {
insertopportunity
}
