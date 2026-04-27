$bytes = [System.IO.File]::ReadAllBytes("public/media/logo.png")
$hex = ($bytes[0..3] | ForEach-Object { $_.ToString("X2") }) -join " "
Write-Host "logo.png header: $hex ($($bytes.Length) bytes)"

$bytes2 = [System.IO.File]::ReadAllBytes("public/media/brand-mark.webp")
$hex2 = ($bytes2[0..3] | ForEach-Object { $_.ToString("X2") }) -join " "
Write-Host "brand-mark.webp header: $hex2 ($($bytes2.Length) bytes)"
