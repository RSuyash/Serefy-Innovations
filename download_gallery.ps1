# Use the thumbnail endpoint which returns proper JPEGs
$images = @(
    @{name='gallery-expert-meetups'; id='16ygqYIFE_KiePlYqq-XUmu8wqPGVTvo6'},
    @{name='gallery-farmer-design'; id='1naUen2YTKtU9kcID-j4kko7BtA545qVt'},
    @{name='gallery-farmer-setup'; id='1R31O9efuFX_ktRgSc2x8vOmue5t4jy88'},
    @{name='gallery-real-challenges'; id='1TE7svqFRaeDKLHrNdlGH9vzdjdE_zRKh'},
    @{name='gallery-healthy-hatch'; id='1k9eWyblbdHcgTXjW-_WQfkPaH4fJP3JH'},
    @{name='gallery-problem-solve'; id='1jyo-lXgPRtq22vZRJKoYi0l_urIRuxI1'},
    @{name='gallery-incubator-assembly'; id='15CrLO2JoQU7McBsC_iOjfVKsY-spCeAU'},
    @{name='gallery-lab-testing'; id='1buXOsDYyk6cLyDRfZPTbWbq1dTkQkdrf'},
    @{name='gallery-team-work'; id='11V_LWD7jf3SUIlWlug9jf-mZ0NumhYHa'}
)

foreach ($img in $images) {
    $url = "https://drive.google.com/thumbnail?id=$($img.id)&sz=w1000"
    $outPath = "public/media/$($img.name).jpg"
    Write-Host "Downloading $($img.name) via thumbnail API..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
        $bytes = [System.IO.File]::ReadAllBytes($outPath)
        $hex = ($bytes[0..3] | ForEach-Object { $_.ToString("X2") }) -join " "
        $size = $bytes.Length
        Write-Host "  OK - $size bytes - Header: $hex"
    } catch {
        Write-Host "  FAILED: $($_.Exception.Message)"
    }
}
Write-Host "Done!"
