// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // TODO: Return token-specific metadata at https://shai.today/api/token/:tokenId
  res.status(200).json({ name: 'John Doe' })
}
