export default async ({ req, res, log, error }) => {
  if(req.method=='GET')
  {
  return res.send('Function was updated')
  }
  if(req.method=='POST')
  {
    return res.json({
      'sentData':req.body,
      'DOGENV':process.env.DOG_NAME,
      'CATENV':process.env.CAT_NAME,
    })
  }
}