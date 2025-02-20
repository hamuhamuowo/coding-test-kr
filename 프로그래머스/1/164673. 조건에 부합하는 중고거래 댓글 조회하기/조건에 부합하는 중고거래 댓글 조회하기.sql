SELECT 
    B.title, 
    B.board_id, 
    R.reply_id, 
    R.writer_id, 
    R.contents, 
    DATE_FORMAT(R.created_date, '%Y-%m-%d') AS CREATED_DATE
FROM USED_GOODS_BOARD B
JOIN USED_GOODS_REPLY R ON B.board_id = R.board_id
WHERE DATE_FORMAT(B.created_date, '%Y-%m') = '2022-10'
ORDER BY R.created_date ASC, B.title ASC;
