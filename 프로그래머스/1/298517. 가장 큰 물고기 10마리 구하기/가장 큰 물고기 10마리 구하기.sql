SELECT id as 'ID', COALESCE(length, 10) as 'LENGTH'
FROM fish_info
ORDER BY length DESC, id ASC
LIMIT 10;