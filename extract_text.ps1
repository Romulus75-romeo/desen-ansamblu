$xmlPath = "c:\Users\Romeo\Desktop\LUCRU ANTIGRAVITY\New Project\temp_docx_extract\word\document.xml"
$content = Get-Content $xmlPath -Raw
$text = $content -replace '<[^>]+>', ' '
$text = $text -replace '\s+', ' '
$text | Out-File "c:\Users\Romeo\Desktop\LUCRU ANTIGRAVITY\New Project\extracted_text.txt" -Encoding utf8
