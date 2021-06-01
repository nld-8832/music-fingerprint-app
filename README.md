music-fingerprint-app
==========

Example output of example_docker_postgres.py (testfile: input_test/record_brickbyboringbrick.mp4)
```
{
	'total_time': 0.31081056594848633, 
	'fingerprint_time': 0.059500932693481445, 
	'query_time': 0.236236572265625, 
	'align_time': 0.014638185501098633, 
	'results': [
		{
			'song_id': 25, 	
			'song_name': b'Brick By Boring Brick - Paramore', 
			'input_total_hashes': 1462, 
			'fingerprinted_hashes_in_db': 154565, 
			'hashes_matched_in_input': 185, 
			'input_confidence': 0.13, 
			'fingerprinted_confidence': 0.0, 
			'offset': 1659, 
			'offset_seconds': 77.04381, 
			'file_sha1': b'02353BADBB9F9CF964271DB3C7207DD09B7DE035'
		}, 
		{
			'song_id': 12, 
			'song_name': b'Be My Girl - Super Junior', 	
			'input_total_hashes': 1462, 
			'fingerprinted_hashes_in_db': 116696, 
			'hashes_matched_in_input': 60, 
			'input_confidence': 0.04, 
			'fingerprinted_confidence': 0.0, 
			'offset': 1061, 'offset_seconds': 49.27274, 
			'file_sha1': b'780DC94683B7F3A5965B34A0717D72ED5ACEF3D5'
		}
	]
}
```
