let data =[]
data['nama'] = ''
data['nomor_hp'] = ''
data['tempat_wisata'] = ''
data['harga_tiket'] = $('#tempat_wisata').val()
data['tanggal'] = ''
data['jumlah_pemesan'] = 0
data['harga_bayar'] = 0
		
		 $('#harga_tiket').text(`Rp ${data['harga_tiket']}`)
		
		 $('#tempat_wisata').on('change', function(){
			 data['harga_tiket'] = $('#tempat_wisata').val()
			 data['tempat_wisata'] = $('#tempat_wisata').text().split(' - ')[0]
			 $('#harga_tiket').text(`Rp ${data['harga_tiket']}`)
		 })
         $('#tempat_wisata').on('change', function(){
            data['harga_tiket'] = $('#tempat_wisata').val()
            data['tempat_wisata'] = $('#tempat_wisata option:selected').text().split(' - ')[0]
            $('#harga_tiket').text(`Rp ${data['harga_tiket']}`)
        })
    
		
		 $('#dewasa').on('input', function () {
			 data['jumlah_pemesan'] = $('#dewasa').val()
			 data['harga_bayar'] = data['jumlah_pemesan'] * data['harga_tiket']
			 $('#harga_bayar').text(`Rp ${data['harga_bayar']}`)
		 })
		 $('#btn-pesan').on('click', function(){
			data['nama'] = $('#nama').val()
			data['nomor_identitas'] = $('#nomor_identitas').val()
			data['nomor_hp'] = $('#nomor_hp').val()
			data['jumlah_pemesan'] = $('#dewasa').val()
            data['tanggal'] = $('#tanggal').val()
			$('#modalDua').html(`
        <table>
                <tr>
                    <td>Nama Pemesan</td>
                    <td>: ${data['nama']}</td>
                </tr>
                <tr>
                    <td>Nomor Identitas</td>
                    <td>: ${data['nomor_identitas']}</td>
                </tr>
                <tr>
                    <td>No HP</td>
                    <td>: ${data['nomor_hp']}</td>
                </tr>
                <tr>
                    <td>Tempat Wisata</td>
                    <td>: ${data['tempat_wisata']}</td>
                </tr>
                <tr>
                    <td>Jumlah Pemesan</td>
                    <td>: ${data['jumlah_pemesan']} Orang</td>
                </tr>
                <tr>
                    <td>Tanggal</td>
                    <td>: ${data['tanggal']}</td>
                </tr>
                <tr>
                    <td>Harga Tiket</td>
                    <td>: Rp. ${data['harga_tiket']}</td>
                </tr>
                <tr>
                    <td>Total Bayar</td>
                    <td>: Rp. ${data['harga_bayar']}</td>
                </tr>
            </table>
        `)
		})
        