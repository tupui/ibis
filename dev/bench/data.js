window.BENCHMARK_DATA = {
  "lastUpdate": 1644111576017,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c2a9757106b0479cb4e794f891aec47d3457b4a6",
          "message": "refactor(benchmarks): move to pytest-benchmark",
          "timestamp": "2022-01-30T21:10:00-05:00",
          "tree_id": "bd3ab97ee668945d803c502be0f7151d150c86de",
          "url": "https://github.com/ibis-project/ibis/commit/c2a9757106b0479cb4e794f891aec47d3457b4a6"
        },
        "date": 1643597611354,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.07711094195638,
            "unit": "iter/sec",
            "range": "stddev: 0.003742554087992319",
            "extra": "mean: 9.427104406597039 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 324174.65400583466,
            "unit": "iter/sec",
            "range": "stddev: 3.020698346483816e-7",
            "extra": "mean: 3.0847568976876323 usec\nrounds: 74627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1537709207060733,
            "unit": "iter/sec",
            "range": "stddev: 0.004426371738493979",
            "extra": "mean: 464.30193219999865 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 385643.7221523987,
            "unit": "iter/sec",
            "range": "stddev: 2.8709558895238066e-7",
            "extra": "mean: 2.5930669749236057 usec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.7342010630355,
            "unit": "iter/sec",
            "range": "stddev: 0.0009844910827777342",
            "extra": "mean: 23.400460875001272 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 39.229055327574606,
            "unit": "iter/sec",
            "range": "stddev: 0.018076123196186098",
            "extra": "mean: 25.491309735849974 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.50615844747404,
            "unit": "iter/sec",
            "range": "stddev: 0.0015502283297067888",
            "extra": "mean: 37.72708150000881 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6225.200868303419,
            "unit": "iter/sec",
            "range": "stddev: 0.00003691290784091648",
            "extra": "mean: 160.63738683383792 usec\nrounds: 2947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 297.1371042347968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001071151960002964",
            "extra": "mean: 3.365449773010519 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3255308511867336,
            "unit": "iter/sec",
            "range": "stddev: 0.00148392524743293",
            "extra": "mean: 754.4147305999786 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.1086463162457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000435628462734635",
            "extra": "mean: 6.206991510791206 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 280.5321457078568,
            "unit": "iter/sec",
            "range": "stddev: 0.00011528213285671415",
            "extra": "mean: 3.5646538740747005 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 195.77123646004875,
            "unit": "iter/sec",
            "range": "stddev: 0.00008589187666057129",
            "extra": "mean: 5.108002677421262 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10294.314298767986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025608916418687424",
            "extra": "mean: 97.14100142830097 usec\nrounds: 4900"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14806349151539935,
            "unit": "iter/sec",
            "range": "stddev: 0.019356925952391305",
            "extra": "mean: 6.75385937320001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 35.837463116075654,
            "unit": "iter/sec",
            "range": "stddev: 0.024731895340908316",
            "extra": "mean: 27.9037608426984 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.77895934506437,
            "unit": "iter/sec",
            "range": "stddev: 0.0004851266670110384",
            "extra": "mean: 12.693744729729687 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.9746138769497,
            "unit": "iter/sec",
            "range": "stddev: 0.00403896192118961",
            "extra": "mean: 6.994248649348648 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.819591253154464,
            "unit": "iter/sec",
            "range": "stddev: 0.002273277611342413",
            "extra": "mean: 23.353796024998985 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.24310032299732,
            "unit": "iter/sec",
            "range": "stddev: 0.0006124549013655986",
            "extra": "mean: 10.724654119564507 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.51058480579926,
            "unit": "iter/sec",
            "range": "stddev: 0.00034921439071842255",
            "extra": "mean: 18.014582326928192 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 73.61021598750395,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462670569136717",
            "extra": "mean: 13.585070857145151 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8573734708624299,
            "unit": "iter/sec",
            "range": "stddev: 0.01712637481104649",
            "extra": "mean: 1.1663528602000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8696576402192142,
            "unit": "iter/sec",
            "range": "stddev: 0.014406461155678367",
            "extra": "mean: 1.149877783799991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.15780229628012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001846274848529561",
            "extra": "mean: 12.171698512501195 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.5853580872893,
            "unit": "iter/sec",
            "range": "stddev: 0.00015263124538334228",
            "extra": "mean: 4.156528925742768 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9938458427018086,
            "unit": "iter/sec",
            "range": "stddev: 0.0015275918244057908",
            "extra": "mean: 334.0185341999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 782.3804676056527,
            "unit": "iter/sec",
            "range": "stddev: 0.000014541811603652526",
            "extra": "mean: 1.2781505180725388 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 328082.5637158478,
            "unit": "iter/sec",
            "range": "stddev: 2.531923843087874e-7",
            "extra": "mean: 3.048013246037969 usec\nrounds: 27933"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23635.565586497865,
            "unit": "iter/sec",
            "range": "stddev: 0.000011903814571836347",
            "extra": "mean: 42.309120817961876 usec\nrounds: 6845"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.82436977390753,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308520124275615",
            "extra": "mean: 10.77303301315917 msec\nrounds: 76"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "0ab44c45926de45737df3bb090427673e8059ac2",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-01T01:26:12Z",
          "tree_id": "89458ccba0885af65c36d0dcc9a9775fcdb7d55f",
          "url": "https://github.com/ibis-project/ibis/commit/0ab44c45926de45737df3bb090427673e8059ac2"
        },
        "date": 1643678989387,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.64886299383875,
            "unit": "iter/sec",
            "range": "stddev: 0.0006951957144510731",
            "extra": "mean: 15.232556275861953 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09132840134746034,
            "unit": "iter/sec",
            "range": "stddev: 0.051817082190627715",
            "extra": "mean: 10.949496380599987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4515.815670341846,
            "unit": "iter/sec",
            "range": "stddev: 0.00008757734830295853",
            "extra": "mean: 221.44393682134069 usec\nrounds: 1931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 32.90941966355741,
            "unit": "iter/sec",
            "range": "stddev: 0.015164390101411561",
            "extra": "mean: 30.38643677777644 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 143.0552309411574,
            "unit": "iter/sec",
            "range": "stddev: 0.003416642412176778",
            "extra": "mean: 6.990307124185679 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 128.80166793261495,
            "unit": "iter/sec",
            "range": "stddev: 0.0012813600497656823",
            "extra": "mean: 7.7638746147539734 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5970094705956152,
            "unit": "iter/sec",
            "range": "stddev: 0.022839375296205576",
            "extra": "mean: 1.675015304200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 623.9896325506138,
            "unit": "iter/sec",
            "range": "stddev: 0.00020339627359648304",
            "extra": "mean: 1.6025907288113266 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16127.95823233822,
            "unit": "iter/sec",
            "range": "stddev: 0.000034795054881438805",
            "extra": "mean: 62.00412882982899 usec\nrounds: 5255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 281390.04508946574,
            "unit": "iter/sec",
            "range": "stddev: 0.000004937107170979606",
            "extra": "mean: 3.5537859901264732 usec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0085026790273628,
            "unit": "iter/sec",
            "range": "stddev: 0.010411203113384965",
            "extra": "mean: 991.5690069999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.77435548286348,
            "unit": "iter/sec",
            "range": "stddev: 0.0015204781568991005",
            "extra": "mean: 15.438208416671273 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.34971781380156,
            "unit": "iter/sec",
            "range": "stddev: 0.0009361511518198493",
            "extra": "mean: 4.991272315788171 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.846199962622443,
            "unit": "iter/sec",
            "range": "stddev: 0.0025575175146261165",
            "extra": "mean: 47.970373583339665 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.06848190888469,
            "unit": "iter/sec",
            "range": "stddev: 0.002054999708315869",
            "extra": "mean: 12.335250105261995 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6157481470594688,
            "unit": "iter/sec",
            "range": "stddev: 0.008781824964234162",
            "extra": "mean: 618.9083377999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 313236.6293703967,
            "unit": "iter/sec",
            "range": "stddev: 0.000024251548278910475",
            "extra": "mean: 3.1924746540977424 usec\nrounds: 68966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 29.35155607951293,
            "unit": "iter/sec",
            "range": "stddev: 0.02466615738429931",
            "extra": "mean: 34.069743944444205 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5861719891284995,
            "unit": "iter/sec",
            "range": "stddev: 0.056296532703768866",
            "extra": "mean: 1.7059839407999788 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 240818.43938638055,
            "unit": "iter/sec",
            "range": "stddev: 0.000029479930521281",
            "extra": "mean: 4.152505939944045 usec\nrounds: 25001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 117.14512224057084,
            "unit": "iter/sec",
            "range": "stddev: 0.0011420694585578934",
            "extra": "mean: 8.536420303923421 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7008.55569432645,
            "unit": "iter/sec",
            "range": "stddev: 0.000054290455758538226",
            "extra": "mean: 142.6827500007623 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 205.7153179829381,
            "unit": "iter/sec",
            "range": "stddev: 0.0009722059345393726",
            "extra": "mean: 4.861086718311075 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.88805208567476,
            "unit": "iter/sec",
            "range": "stddev: 0.001535341339477083",
            "extra": "mean: 12.5175163731313 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.54319064429673,
            "unit": "iter/sec",
            "range": "stddev: 0.003482423674332209",
            "extra": "mean: 27.364879266667685 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.673879995805184,
            "unit": "iter/sec",
            "range": "stddev: 0.0026204558627631455",
            "extra": "mean: 33.699671230771436 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.087714943357554,
            "unit": "iter/sec",
            "range": "stddev: 0.0030362016862907864",
            "extra": "mean: 31.164575033318442 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 193.2153377697609,
            "unit": "iter/sec",
            "range": "stddev: 0.0006804870873720165",
            "extra": "mean: 5.175572558280125 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 67.56437631281618,
            "unit": "iter/sec",
            "range": "stddev: 0.0012475944558683512",
            "extra": "mean: 14.80069904545706 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.44550422569397,
            "unit": "iter/sec",
            "range": "stddev: 0.0014136887531062434",
            "extra": "mean: 13.615537268653714 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.1620090302179906,
            "unit": "iter/sec",
            "range": "stddev: 0.012152621427053766",
            "extra": "mean: 462.5327581999841 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "696f9802b58d3e250fc30fc7c3a32259315223ce",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-01T02:05:49Z",
          "tree_id": "e782e23ac609588c5e9ffdc7fcd9106546e8eafc",
          "url": "https://github.com/ibis-project/ibis/commit/696f9802b58d3e250fc30fc7c3a32259315223ce"
        },
        "date": 1643681313159,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.30946748685002,
            "unit": "iter/sec",
            "range": "stddev: 0.00024331948686712347",
            "extra": "mean: 12.298690803278566 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 295849.033668416,
            "unit": "iter/sec",
            "range": "stddev: 3.0057926008569837e-7",
            "extra": "mean: 3.380102302854867 usec\nrounds: 23753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.30850656443787,
            "unit": "iter/sec",
            "range": "stddev: 0.00048263409908801526",
            "extra": "mean: 42.90279161538881 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.52194810932728,
            "unit": "iter/sec",
            "range": "stddev: 0.005523381077408605",
            "extra": "mean: 11.047044621623218 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.12497589923811,
            "unit": "iter/sec",
            "range": "stddev: 0.0005213464849325416",
            "extra": "mean: 29.30404999999799 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 300486.0831822038,
            "unit": "iter/sec",
            "range": "stddev: 2.9515274145970043e-7",
            "extra": "mean: 3.327941145925339 usec\nrounds: 57804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7151095006116694,
            "unit": "iter/sec",
            "range": "stddev: 0.009781659285165865",
            "extra": "mean: 1.398387238800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 668.0836559640101,
            "unit": "iter/sec",
            "range": "stddev: 0.00002668404017033352",
            "extra": "mean: 1.4968185362311428 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.1535600458491,
            "unit": "iter/sec",
            "range": "stddev: 0.00007920438859680065",
            "extra": "mean: 7.135031030769859 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8449399401609623,
            "unit": "iter/sec",
            "range": "stddev: 0.0049128009123626465",
            "extra": "mean: 542.0230644000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 29.664405371720417,
            "unit": "iter/sec",
            "range": "stddev: 0.027934581096393536",
            "extra": "mean: 33.710434693335095 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.6063173685376895,
            "unit": "iter/sec",
            "range": "stddev: 0.002296966517745667",
            "extra": "mean: 383.6831277999977 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 252.31139036564326,
            "unit": "iter/sec",
            "range": "stddev: 0.00010288458184098117",
            "extra": "mean: 3.9633565434791724 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.39897048229312,
            "unit": "iter/sec",
            "range": "stddev: 0.000539982021233822",
            "extra": "mean: 18.726952803923364 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 348156.8641300144,
            "unit": "iter/sec",
            "range": "stddev: 2.609326790964805e-7",
            "extra": "mean: 2.872268517522503 usec\nrounds: 55866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 207.07697484138114,
            "unit": "iter/sec",
            "range": "stddev: 0.00004391036861208001",
            "extra": "mean: 4.8291221212111575 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 242.49080130680528,
            "unit": "iter/sec",
            "range": "stddev: 0.00014995419545264224",
            "extra": "mean: 4.123867769873777 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.87849646767918,
            "unit": "iter/sec",
            "range": "stddev: 0.0006359992147296773",
            "extra": "mean: 22.790206604654248 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 167.81738118451028,
            "unit": "iter/sec",
            "range": "stddev: 0.00021639854388331552",
            "extra": "mean: 5.958858331250738 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.148187129866664,
            "unit": "iter/sec",
            "range": "stddev: 0.0025191589087456678",
            "extra": "mean: 870.938172000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.26913339739818,
            "unit": "iter/sec",
            "range": "stddev: 0.00007202763326729355",
            "extra": "mean: 15.089981545454487 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5397.20803096599,
            "unit": "iter/sec",
            "range": "stddev: 0.00004139531081741605",
            "extra": "mean: 185.28098125226805 usec\nrounds: 2667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8923.527693990494,
            "unit": "iter/sec",
            "range": "stddev: 0.000003171474892376664",
            "extra": "mean: 112.0633043671109 usec\nrounds: 4511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 70.90949199895618,
            "unit": "iter/sec",
            "range": "stddev: 0.00007721910448155876",
            "extra": "mean: 14.102484333334672 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.13159596730621,
            "unit": "iter/sec",
            "range": "stddev: 0.0004647519265111007",
            "extra": "mean: 28.464405685714055 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.64937489493569,
            "unit": "iter/sec",
            "range": "stddev: 0.00025889250517207793",
            "extra": "mean: 12.399352150004006 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7001576475099172,
            "unit": "iter/sec",
            "range": "stddev: 0.007910320891348422",
            "extra": "mean: 1.4282497713999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 34.26770699504194,
            "unit": "iter/sec",
            "range": "stddev: 0.020977262010590046",
            "extra": "mean: 29.181993418605046 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20000.40320360971,
            "unit": "iter/sec",
            "range": "stddev: 0.00001838163452850627",
            "extra": "mean: 49.998992011296956 usec\nrounds: 5883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.62393090282072,
            "unit": "iter/sec",
            "range": "stddev: 0.00011644046500530422",
            "extra": "mean: 7.4280998429755964 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12792683578278566,
            "unit": "iter/sec",
            "range": "stddev: 0.028882210197306624",
            "extra": "mean: 7.816968143400009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29585319+EdAbati@users.noreply.github.com",
            "name": "Edoardo Abati",
            "username": "EdAbati"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a80b567c9106f0e7f5652eb1c7fd8dba0ac28490",
          "message": "refactor: using ibis.expr.api.schema inside ibis.expr.api.table\n\nfixes #3040",
          "timestamp": "2022-02-01T04:37:50-05:00",
          "tree_id": "fd16e40d005684db5b633c7d111e97e1021a6d52",
          "url": "https://github.com/ibis-project/ibis/commit/a80b567c9106f0e7f5652eb1c7fd8dba0ac28490"
        },
        "date": 1643709376601,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 382489.735544128,
            "unit": "iter/sec",
            "range": "stddev: 1.8098621370730352e-7",
            "extra": "mean: 2.614449244180122 usec\nrounds: 24214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3381508448032127,
            "unit": "iter/sec",
            "range": "stddev: 0.0018402881605892234",
            "extra": "mean: 747.2999055999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 227.65739651977543,
            "unit": "iter/sec",
            "range": "stddev: 0.00034503171789691426",
            "extra": "mean: 4.392565386792233 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.87356992248466,
            "unit": "iter/sec",
            "range": "stddev: 0.00009659077432945725",
            "extra": "mean: 9.81608871428475 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.448371073603,
            "unit": "iter/sec",
            "range": "stddev: 0.00019096359322683598",
            "extra": "mean: 10.055468874999343 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 793.0882016820722,
            "unit": "iter/sec",
            "range": "stddev: 0.00001692302714387466",
            "extra": "mean: 1.260893804597125 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 197.11121783809782,
            "unit": "iter/sec",
            "range": "stddev: 0.00008593294792609723",
            "extra": "mean: 5.073277974576641 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.97120825307117,
            "unit": "iter/sec",
            "range": "stddev: 0.0010638381982689005",
            "extra": "mean: 21.289637571429004 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9311358465279541,
            "unit": "iter/sec",
            "range": "stddev: 0.004704844854045582",
            "extra": "mean: 1.0739571500000011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9986.47765076889,
            "unit": "iter/sec",
            "range": "stddev: 0.000004329545006622449",
            "extra": "mean: 100.13540659383611 usec\nrounds: 364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 36.66095537863077,
            "unit": "iter/sec",
            "range": "stddev: 0.02158175553061157",
            "extra": "mean: 27.276976000000484 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.35270990100705,
            "unit": "iter/sec",
            "range": "stddev: 0.00021260200311780337",
            "extra": "mean: 6.159429064102103 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.578840468426385,
            "unit": "iter/sec",
            "range": "stddev: 0.00047162168030101423",
            "extra": "mean: 21.940005268293856 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 74.43517514508005,
            "unit": "iter/sec",
            "range": "stddev: 0.0004540683910204194",
            "extra": "mean: 13.434508591548562 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1420084423921293,
            "unit": "iter/sec",
            "range": "stddev: 0.0030711599403752676",
            "extra": "mean: 466.85156799999845 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14906857113516866,
            "unit": "iter/sec",
            "range": "stddev: 0.033401575339443206",
            "extra": "mean: 6.708322166000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 324437.35005999584,
            "unit": "iter/sec",
            "range": "stddev: 1.7153956892654762e-7",
            "extra": "mean: 3.0822591782822704 usec\nrounds: 28818"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.0412974712789,
            "unit": "iter/sec",
            "range": "stddev: 0.00005873888418597689",
            "extra": "mean: 12.04220105479283 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 326712.79299523286,
            "unit": "iter/sec",
            "range": "stddev: 1.7503077215629772e-7",
            "extra": "mean: 3.0607922965985335 usec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6357.7141770719945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000354722179420317",
            "extra": "mean: 157.2892351163455 usec\nrounds: 2654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 277.27706685930826,
            "unit": "iter/sec",
            "range": "stddev: 0.0001255443741177311",
            "extra": "mean: 3.6065009318185153 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.78551245578602,
            "unit": "iter/sec",
            "range": "stddev: 0.0008925003327223879",
            "extra": "mean: 9.364566194445569 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.930527496230401,
            "unit": "iter/sec",
            "range": "stddev: 0.0023255197084932925",
            "extra": "mean: 1.0746592702000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.17239321079432,
            "unit": "iter/sec",
            "range": "stddev: 0.0009407602011237505",
            "extra": "mean: 36.80205833333616 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23318.9203690386,
            "unit": "iter/sec",
            "range": "stddev: 0.000011556482698207545",
            "extra": "mean: 42.88363201101443 usec\nrounds: 6579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 80.9075063893286,
            "unit": "iter/sec",
            "range": "stddev: 0.00007880414620425262",
            "extra": "mean: 12.359792615384526 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.42693615833586,
            "unit": "iter/sec",
            "range": "stddev: 0.019125044792812417",
            "extra": "mean: 26.02341222000007 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.65997987337917,
            "unit": "iter/sec",
            "range": "stddev: 0.00003594282707498085",
            "extra": "mean: 6.110229273972062 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.074330827655789,
            "unit": "iter/sec",
            "range": "stddev: 0.0017670377652363137",
            "extra": "mean: 325.27403719999484 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.138011525533464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006556113869739561",
            "extra": "mean: 17.50148409615421 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 294.9955813531355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000778926478607059",
            "extra": "mean: 3.3898812836891703 msec\nrounds: 282"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "saul@voltrondata.com",
            "name": "Saul Pwanson",
            "username": "saulpw"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "327b34254918eecca28f3066152d9e53445997d0",
          "message": "fix(api): add ibis.map and .struct\n\nPrefer these instead of the more generic ibis.literal to create compound literals.\nLike .array() for array types.\n\ncloses #3118",
          "timestamp": "2022-02-01T04:42:35-05:00",
          "tree_id": "46115a08b3c46592ee3ce7bb73c162c8e9c26c50",
          "url": "https://github.com/ibis-project/ibis/commit/327b34254918eecca28f3066152d9e53445997d0"
        },
        "date": 1643709651739,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 41.35730715632591,
            "unit": "iter/sec",
            "range": "stddev: 0.013554991973957644",
            "extra": "mean: 24.179523976745244 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.896751635074885,
            "unit": "iter/sec",
            "range": "stddev: 0.0004167820757965612",
            "extra": "mean: 21.78803432432432 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1512463107303399,
            "unit": "iter/sec",
            "range": "stddev: 0.030554606458220644",
            "extra": "mean: 6.611731520399994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 244.37316286335925,
            "unit": "iter/sec",
            "range": "stddev: 0.00012618938030810052",
            "extra": "mean: 4.092102374429502 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 779.5487642387747,
            "unit": "iter/sec",
            "range": "stddev: 0.000027763634707319968",
            "extra": "mean: 1.2827933875009023 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.18044298094695,
            "unit": "iter/sec",
            "range": "stddev: 0.0004156109571415006",
            "extra": "mean: 38.19645071428925 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 326184.93213373993,
            "unit": "iter/sec",
            "range": "stddev: 2.4717589809572173e-7",
            "extra": "mean: 3.0657455372279045 usec\nrounds: 26385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3396052260399376,
            "unit": "iter/sec",
            "range": "stddev: 0.0046651389255778705",
            "extra": "mean: 746.4885777999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.43392150459124,
            "unit": "iter/sec",
            "range": "stddev: 0.00008461738956163591",
            "extra": "mean: 6.118680814814247 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.908560895666135,
            "unit": "iter/sec",
            "range": "stddev: 0.0004774422879936866",
            "extra": "mean: 17.26860389091175 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 278.08432642772937,
            "unit": "iter/sec",
            "range": "stddev: 0.00012971785558583312",
            "extra": "mean: 3.59603150902461 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6304.3028813457095,
            "unit": "iter/sec",
            "range": "stddev: 0.00003430032669395507",
            "extra": "mean: 158.62182049643863 usec\nrounds: 3142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 387158.91796808847,
            "unit": "iter/sec",
            "range": "stddev: 3.207450601594544e-7",
            "extra": "mean: 2.582918676517287 usec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 282.89756546163574,
            "unit": "iter/sec",
            "range": "stddev: 0.00020481021294445196",
            "extra": "mean: 3.5348483765428935 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18843.895914636232,
            "unit": "iter/sec",
            "range": "stddev: 0.0006952811937327004",
            "extra": "mean: 53.06758244314492 usec\nrounds: 5992"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.20184420318516,
            "unit": "iter/sec",
            "range": "stddev: 0.00009820862500778429",
            "extra": "mean: 12.018964358024622 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10306.72382118843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018405598932739937",
            "extra": "mean: 97.02404152367144 usec\nrounds: 6117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 326781.59656634636,
            "unit": "iter/sec",
            "range": "stddev: 1.8384185088051494e-7",
            "extra": "mean: 3.0601478495346366 usec\nrounds: 70423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 75.84680534364874,
            "unit": "iter/sec",
            "range": "stddev: 0.000675161354703202",
            "extra": "mean: 13.184470927538387 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.67007297547494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002769633709736672",
            "extra": "mean: 9.83573603061367 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9250994814515809,
            "unit": "iter/sec",
            "range": "stddev: 0.0029467159449834027",
            "extra": "mean: 1.0809648260000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.0722974674502836,
            "unit": "iter/sec",
            "range": "stddev: 0.0021146515493881786",
            "extra": "mean: 325.489315599998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 81.25903779590095,
            "unit": "iter/sec",
            "range": "stddev: 0.00003819630998226714",
            "extra": "mean: 12.306323421053902 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 114.49286655629442,
            "unit": "iter/sec",
            "range": "stddev: 0.00037482569225609844",
            "extra": "mean: 8.734168600000203 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.538213528275,
            "unit": "iter/sec",
            "range": "stddev: 0.0004928301712807177",
            "extra": "mean: 6.388216509314979 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9206552303126866,
            "unit": "iter/sec",
            "range": "stddev: 0.004278057370630004",
            "extra": "mean: 1.0861829347999958 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.38038622244656,
            "unit": "iter/sec",
            "range": "stddev: 0.0003834223775907208",
            "extra": "mean: 10.164627710841808 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 197.41692446953448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008295216736610366",
            "extra": "mean: 5.065421835980029 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.59036411181629,
            "unit": "iter/sec",
            "range": "stddev: 0.0010952234434492582",
            "extra": "mean: 21.934459605265932 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.144566805300836,
            "unit": "iter/sec",
            "range": "stddev: 0.0026391208319037933",
            "extra": "mean: 466.2946369999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 37.08623453692009,
            "unit": "iter/sec",
            "range": "stddev: 0.025810149461277396",
            "extra": "mean: 26.964182600001624 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "9ad5bc7b53b82108ee7cd40cd216bd9b6a870d91",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-02T01:15:12Z",
          "tree_id": "235028858cb2e8723fbcb2395bf9148e6888ed27",
          "url": "https://github.com/ibis-project/ibis/commit/9ad5bc7b53b82108ee7cd40cd216bd9b6a870d91"
        },
        "date": 1643764708919,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 261.20734371467347,
            "unit": "iter/sec",
            "range": "stddev: 0.0004449690847539198",
            "extra": "mean: 3.8283762844445035 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.1874390776958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008256910053242358",
            "extra": "mean: 12.955475812501227 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 39.14034310040769,
            "unit": "iter/sec",
            "range": "stddev: 0.015389357481386179",
            "extra": "mean: 25.549086205879068 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.86540537177049,
            "unit": "iter/sec",
            "range": "stddev: 0.0022388758140134816",
            "extra": "mean: 20.464375408163484 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9380528161584077,
            "unit": "iter/sec",
            "range": "stddev: 0.021764977059023808",
            "extra": "mean: 1.066038055399997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 26497.925544238813,
            "unit": "iter/sec",
            "range": "stddev: 0.000016586706249506804",
            "extra": "mean: 37.73880330105389 usec\nrounds: 8058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 39.84791916415842,
            "unit": "iter/sec",
            "range": "stddev: 0.021492684395400235",
            "extra": "mean: 25.095413285707007 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.75836829587208,
            "unit": "iter/sec",
            "range": "stddev: 0.0015196401976891299",
            "extra": "mean: 16.7340579824546 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 446995.81263796345,
            "unit": "iter/sec",
            "range": "stddev: 4.666277588863038e-7",
            "extra": "mean: 2.2371574223446538 usec\nrounds: 68961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 79.25863275365522,
            "unit": "iter/sec",
            "range": "stddev: 0.0013291325778629931",
            "extra": "mean: 12.616922160493392 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.431379336085979,
            "unit": "iter/sec",
            "range": "stddev: 0.00152523619421513",
            "extra": "mean: 291.42799500000933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 871.1851196168074,
            "unit": "iter/sec",
            "range": "stddev: 0.00002712031418229844",
            "extra": "mean: 1.147861662788561 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 380254.60501599545,
            "unit": "iter/sec",
            "range": "stddev: 4.2541294944221065e-7",
            "extra": "mean: 2.6298169353082126 usec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7394.160815722725,
            "unit": "iter/sec",
            "range": "stddev: 0.000027948247894517428",
            "extra": "mean: 135.24185163428277 usec\nrounds: 2723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 221.16138621139766,
            "unit": "iter/sec",
            "range": "stddev: 0.00011085433308602127",
            "extra": "mean: 4.521584970733307 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 120.95388396045348,
            "unit": "iter/sec",
            "range": "stddev: 0.0048650613021289256",
            "extra": "mean: 8.267613798387453 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.488691998891654,
            "unit": "iter/sec",
            "range": "stddev: 0.003646248677335673",
            "extra": "mean: 671.7306203999954 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 109.25986597683136,
            "unit": "iter/sec",
            "range": "stddev: 0.0005654895673467701",
            "extra": "mean: 9.152491549019938 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 187.04716462592182,
            "unit": "iter/sec",
            "range": "stddev: 0.00008811980903715648",
            "extra": "mean: 5.3462451676287825 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.375335083353846,
            "unit": "iter/sec",
            "range": "stddev: 0.003040140006013713",
            "extra": "mean: 420.99323460000164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.940715549894613,
            "unit": "iter/sec",
            "range": "stddev: 0.019294617486146776",
            "extra": "mean: 1.063020591199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16010690906505662,
            "unit": "iter/sec",
            "range": "stddev: 0.022748344273217386",
            "extra": "mean: 6.2458266532000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.36659348384727,
            "unit": "iter/sec",
            "range": "stddev: 0.0010282371020267273",
            "extra": "mean: 21.567251869567908 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.89999597104584,
            "unit": "iter/sec",
            "range": "stddev: 0.0008005292766614522",
            "extra": "mean: 9.813543076921642 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 369781.14296915213,
            "unit": "iter/sec",
            "range": "stddev: 2.6524131264561424e-7",
            "extra": "mean: 2.704302312363781 usec\nrounds: 25907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 92.8700666538226,
            "unit": "iter/sec",
            "range": "stddev: 0.00012575953076487582",
            "extra": "mean: 10.767732123285164 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 336.64920714974284,
            "unit": "iter/sec",
            "range": "stddev: 0.00012831099700787857",
            "extra": "mean: 2.9704510771510484 msec\nrounds: 337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 314.9830626420221,
            "unit": "iter/sec",
            "range": "stddev: 0.00011296407208953506",
            "extra": "mean: 3.1747738802593934 msec\nrounds: 309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11577.43543102063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029710730388472566",
            "extra": "mean: 86.37491489009696 usec\nrounds: 6192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 29.594629690625975,
            "unit": "iter/sec",
            "range": "stddev: 0.002020708277339644",
            "extra": "mean: 33.78991426666668 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 182.99266605906433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007868878621161539",
            "extra": "mean: 5.464699878612791 msec\nrounds: 173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "e42f2200686e639cae83690fefbca9d8abcd5523",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-02T01:58:02Z",
          "tree_id": "c4214d3c2b0658fcde1f38841c6abfe758acc6d9",
          "url": "https://github.com/ibis-project/ibis/commit/e42f2200686e639cae83690fefbca9d8abcd5523"
        },
        "date": 1643767277224,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.18646290693381,
            "unit": "iter/sec",
            "range": "stddev: 0.001210779351955046",
            "extra": "mean: 11.602750203124401 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 343052.81572072953,
            "unit": "iter/sec",
            "range": "stddev: 0.000003650884773568855",
            "extra": "mean: 2.9150030379405902 usec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 196.13435578400967,
            "unit": "iter/sec",
            "range": "stddev: 0.000420483190014043",
            "extra": "mean: 5.098545820810896 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 203.62710921310475,
            "unit": "iter/sec",
            "range": "stddev: 0.0023890941001742188",
            "extra": "mean: 4.910937467336217 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5476261529614634,
            "unit": "iter/sec",
            "range": "stddev: 0.045133434277015744",
            "extra": "mean: 1.8260632634000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 281464.2621056883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034067374075537196",
            "extra": "mean: 3.5528489212762135 usec\nrounds: 22624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.45192895895958,
            "unit": "iter/sec",
            "range": "stddev: 0.019995311395202178",
            "extra": "mean: 30.81480922951153 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 288095.86456261744,
            "unit": "iter/sec",
            "range": "stddev: 0.00000353735422050243",
            "extra": "mean: 3.471066832278846 usec\nrounds: 76924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8670688781127127,
            "unit": "iter/sec",
            "range": "stddev: 0.03468056295656594",
            "extra": "mean: 535.5988799999864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8825223609668078,
            "unit": "iter/sec",
            "range": "stddev: 0.06936606147546297",
            "extra": "mean: 1.133115764799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08921961593165816,
            "unit": "iter/sec",
            "range": "stddev: 0.048299511101228536",
            "extra": "mean: 11.208297520199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 62.65970713276723,
            "unit": "iter/sec",
            "range": "stddev: 0.001842293086857996",
            "extra": "mean: 15.959219181812305 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.126864040381367,
            "unit": "iter/sec",
            "range": "stddev: 0.0023466599598242306",
            "extra": "mean: 47.33310149999662 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4636.590537188819,
            "unit": "iter/sec",
            "range": "stddev: 0.000056884301038040774",
            "extra": "mean: 215.67571947086432 usec\nrounds: 606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 31.76435593159297,
            "unit": "iter/sec",
            "range": "stddev: 0.018771536070782323",
            "extra": "mean: 31.481828315788253 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5419044722680799,
            "unit": "iter/sec",
            "range": "stddev: 0.05391948692143025",
            "extra": "mean: 1.8453436927999747 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.57510648231395,
            "unit": "iter/sec",
            "range": "stddev: 0.001704065673471958",
            "extra": "mean: 32.70634562069133 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.13318068509201,
            "unit": "iter/sec",
            "range": "stddev: 0.0008846259840331667",
            "extra": "mean: 15.121002644069463 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.4042882644567565,
            "unit": "iter/sec",
            "range": "stddev: 0.05588797612038139",
            "extra": "mean: 712.1045053999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.99241302287659,
            "unit": "iter/sec",
            "range": "stddev: 0.0007192688969542186",
            "extra": "mean: 8.403897144330937 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 149.5934727069953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004013016347252505",
            "extra": "mean: 6.684783646668014 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.8539216852467,
            "unit": "iter/sec",
            "range": "stddev: 0.006228285088567057",
            "extra": "mean: 12.844568113638129 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.49623766761619,
            "unit": "iter/sec",
            "range": "stddev: 0.00044384496412616924",
            "extra": "mean: 14.389268161288959 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.00608792710088,
            "unit": "iter/sec",
            "range": "stddev: 0.0008280273897875065",
            "extra": "mean: 23.252521868417524 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.59595355505861,
            "unit": "iter/sec",
            "range": "stddev: 0.0007032857519709372",
            "extra": "mean: 12.887269943663297 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.59487256387588,
            "unit": "iter/sec",
            "range": "stddev: 0.0009597269869499211",
            "extra": "mean: 7.899214081482097 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15562.873745231256,
            "unit": "iter/sec",
            "range": "stddev: 0.00005915561379246132",
            "extra": "mean: 64.25548496828344 usec\nrounds: 7118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 632.4861816824856,
            "unit": "iter/sec",
            "range": "stddev: 0.00015223843879545937",
            "extra": "mean: 1.5810622096752938 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7243.143541706394,
            "unit": "iter/sec",
            "range": "stddev: 0.00007516949383094849",
            "extra": "mean: 138.06160187796203 usec\nrounds: 3941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.39691118314852,
            "unit": "iter/sec",
            "range": "stddev: 0.002455478550317104",
            "extra": "mean: 30.867140214285524 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 222.94682564804475,
            "unit": "iter/sec",
            "range": "stddev: 0.00046696661477275584",
            "extra": "mean: 4.4853744703172005 msec\nrounds: 219"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "1e69defd7a79df36599b1a78a4d772e348a9cf66",
          "message": "docs: move to mkdocs",
          "timestamp": "2022-02-02T11:34:13-05:00",
          "tree_id": "5f3b4423e3abf15cc10f3547805dceec91831b12",
          "url": "https://github.com/ibis-project/ibis/commit/1e69defd7a79df36599b1a78a4d772e348a9cf66"
        },
        "date": 1643820760237,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.3211453152680965,
            "unit": "iter/sec",
            "range": "stddev: 0.009297580647088277",
            "extra": "mean: 430.8217988000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.666882161748176,
            "unit": "iter/sec",
            "range": "stddev: 0.01264996206425351",
            "extra": "mean: 599.922431799996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 347446.66804639425,
            "unit": "iter/sec",
            "range": "stddev: 0.000004614009802290609",
            "extra": "mean: 2.8781395591523444 usec\nrounds: 58477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 207.67486933931693,
            "unit": "iter/sec",
            "range": "stddev: 0.0005140844459044975",
            "extra": "mean: 4.815219112362193 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4519.874646641552,
            "unit": "iter/sec",
            "range": "stddev: 0.0001868485687271455",
            "extra": "mean: 221.2450738524441 usec\nrounds: 2004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16306.007392059424,
            "unit": "iter/sec",
            "range": "stddev: 0.000045986854186864026",
            "extra": "mean: 61.32709105031882 usec\nrounds: 5821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 155.92348932445665,
            "unit": "iter/sec",
            "range": "stddev: 0.0007531906308634359",
            "extra": "mean: 6.413401882760135 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0870069145749014,
            "unit": "iter/sec",
            "range": "stddev: 0.15220571140376696",
            "extra": "mean: 11.493339407400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.6786594265636,
            "unit": "iter/sec",
            "range": "stddev: 0.0013698377683228282",
            "extra": "mean: 14.14854226315679 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 607.0769720172834,
            "unit": "iter/sec",
            "range": "stddev: 0.0004755818351002257",
            "extra": "mean: 1.6472375762781035 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 183.9732868322546,
            "unit": "iter/sec",
            "range": "stddev: 0.000917086949474269",
            "extra": "mean: 5.435571746412251 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5812550865102237,
            "unit": "iter/sec",
            "range": "stddev: 0.020615734920814754",
            "extra": "mean: 1.7204150521999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 28.506765839637453,
            "unit": "iter/sec",
            "range": "stddev: 0.02255781751949099",
            "extra": "mean: 35.079391524995174 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5748431769524158,
            "unit": "iter/sec",
            "range": "stddev: 0.035262555040332065",
            "extra": "mean: 1.7396048872000052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0170562638055587,
            "unit": "iter/sec",
            "range": "stddev: 0.020026775064846215",
            "extra": "mean: 983.2297735999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.6393657324266,
            "unit": "iter/sec",
            "range": "stddev: 0.001467683713737768",
            "extra": "mean: 15.470448830508033 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.93781881011976,
            "unit": "iter/sec",
            "range": "stddev: 0.0032503926657313563",
            "extra": "mean: 24.427290682932078 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 227.60436744182667,
            "unit": "iter/sec",
            "range": "stddev: 0.0003454343114366407",
            "extra": "mean: 4.393588801654211 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.36523088044711,
            "unit": "iter/sec",
            "range": "stddev: 0.000960050577006146",
            "extra": "mean: 17.432162037037127 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.371563217547408,
            "unit": "iter/sec",
            "range": "stddev: 0.0027906625018824563",
            "extra": "mean: 46.79114905263161 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.07651276212201,
            "unit": "iter/sec",
            "range": "stddev: 0.0010304478503304286",
            "extra": "mean: 11.226303870589216 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 128.50900780594446,
            "unit": "iter/sec",
            "range": "stddev: 0.0009742423633907689",
            "extra": "mean: 7.781555682929667 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7522.158413896939,
            "unit": "iter/sec",
            "range": "stddev: 0.00007155480173645762",
            "extra": "mean: 132.9405663875056 usec\nrounds: 5016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 66.71967578604576,
            "unit": "iter/sec",
            "range": "stddev: 0.001543618574343043",
            "extra": "mean: 14.988082424242645 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.641890677766426,
            "unit": "iter/sec",
            "range": "stddev: 0.0024451513893745396",
            "extra": "mean: 28.866784705888236 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 126.90299933392869,
            "unit": "iter/sec",
            "range": "stddev: 0.0008079362601042917",
            "extra": "mean: 7.880034398309456 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 302650.4080475644,
            "unit": "iter/sec",
            "range": "stddev: 0.000003228649680165449",
            "extra": "mean: 3.3041422493071297 usec\nrounds: 17153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 30.007075007110622,
            "unit": "iter/sec",
            "range": "stddev: 0.02354318348371618",
            "extra": "mean: 33.32547406780018 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.12264995236758,
            "unit": "iter/sec",
            "range": "stddev: 0.0010862890451582758",
            "extra": "mean: 11.61134731168951 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.626883005439307,
            "unit": "iter/sec",
            "range": "stddev: 0.0028619416669493324",
            "extra": "mean: 33.753128866658244 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 275371.95835655346,
            "unit": "iter/sec",
            "range": "stddev: 0.000010411000237915352",
            "extra": "mean: 3.631451822357284 usec\nrounds: 31747"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7fe557333b49551b86c0ad121386687763420723",
          "message": "fix: implement count on tables for pyspark\n\nCloses #2879.",
          "timestamp": "2022-02-02T11:34:42-05:00",
          "tree_id": "ab6aaeb24ef496138ea7e36af396e19032368273",
          "url": "https://github.com/ibis-project/ibis/commit/7fe557333b49551b86c0ad121386687763420723"
        },
        "date": 1643821473200,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 257.92460758173894,
            "unit": "iter/sec",
            "range": "stddev: 0.00005301268955914411",
            "extra": "mean: 3.877101953845524 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 72.98167771465322,
            "unit": "iter/sec",
            "range": "stddev: 0.0008830232921892116",
            "extra": "mean: 13.702069222220972 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 344577.74242244026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027054458546146847",
            "extra": "mean: 2.9021027097392578 usec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4504.347479149204,
            "unit": "iter/sec",
            "range": "stddev: 0.001268829903473324",
            "extra": "mean: 222.00773910739304 usec\nrounds: 1905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8577.197595300704,
            "unit": "iter/sec",
            "range": "stddev: 0.000047017274745255376",
            "extra": "mean: 116.58819665619949 usec\nrounds: 4546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 206.86600133666107,
            "unit": "iter/sec",
            "range": "stddev: 0.00023422065864292348",
            "extra": "mean: 4.834047129728991 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.70695036739923,
            "unit": "iter/sec",
            "range": "stddev: 0.005430888071704634",
            "extra": "mean: 7.535400348146797 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.88208023078525,
            "unit": "iter/sec",
            "range": "stddev: 0.00025264665274705913",
            "extra": "mean: 23.31976421428584 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20068.42744618834,
            "unit": "iter/sec",
            "range": "stddev: 0.00001465745345542955",
            "extra": "mean: 49.829514678288014 usec\nrounds: 5893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.615462107824958,
            "unit": "iter/sec",
            "range": "stddev: 0.001849151500428102",
            "extra": "mean: 382.34161260000405 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.57278292673814,
            "unit": "iter/sec",
            "range": "stddev: 0.00007650064242313913",
            "extra": "mean: 15.486400843751191 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12889209830213672,
            "unit": "iter/sec",
            "range": "stddev: 0.0541563063087438",
            "extra": "mean: 7.758427499999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8652643494884389,
            "unit": "iter/sec",
            "range": "stddev: 0.004535568084040563",
            "extra": "mean: 536.1170389999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 171.49515829649093,
            "unit": "iter/sec",
            "range": "stddev: 0.00010465261189388554",
            "extra": "mean: 5.831068409938088 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 71.02385539614818,
            "unit": "iter/sec",
            "range": "stddev: 0.00015912953469361934",
            "extra": "mean: 14.079776357145386 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 304024.70511782414,
            "unit": "iter/sec",
            "range": "stddev: 4.2309526655010703e-7",
            "extra": "mean: 3.289206380818467 usec\nrounds: 75758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 673.1759366430538,
            "unit": "iter/sec",
            "range": "stddev: 0.000019648499384467073",
            "extra": "mean: 1.4854957605685215 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.26648528439574,
            "unit": "iter/sec",
            "range": "stddev: 0.008675443531477832",
            "extra": "mean: 11.078308819152271 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7905482550255818,
            "unit": "iter/sec",
            "range": "stddev: 0.006961917233789538",
            "extra": "mean: 1.2649449209999717 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.368902790799204,
            "unit": "iter/sec",
            "range": "stddev: 0.0007327984845665075",
            "extra": "mean: 16.56481986206331 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 299067.32320828864,
            "unit": "iter/sec",
            "range": "stddev: 2.6611191621954475e-7",
            "extra": "mean: 3.3437287272723517 usec\nrounds: 24938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 238.98058497010345,
            "unit": "iter/sec",
            "range": "stddev: 0.00015923198368170564",
            "extra": "mean: 4.184440339055578 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 34.13379157225992,
            "unit": "iter/sec",
            "range": "stddev: 0.0208737784272282",
            "extra": "mean: 29.29648169565454 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.206705161157423,
            "unit": "iter/sec",
            "range": "stddev: 0.00045835116781128084",
            "extra": "mean: 43.09099430770402 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1527298654959022,
            "unit": "iter/sec",
            "range": "stddev: 0.004886434182760771",
            "extra": "mean: 867.5059352000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 28.986417189366538,
            "unit": "iter/sec",
            "range": "stddev: 0.0300673485968678",
            "extra": "mean: 34.498916974355936 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.7555729124037,
            "unit": "iter/sec",
            "range": "stddev: 0.00007065006716618685",
            "extra": "mean: 7.312316263999946 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.68662685293947,
            "unit": "iter/sec",
            "range": "stddev: 0.00031286264985411005",
            "extra": "mean: 12.393627531643048 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7859391555378547,
            "unit": "iter/sec",
            "range": "stddev: 0.005603169463932525",
            "extra": "mean: 1.2723631249999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.88461407322962,
            "unit": "iter/sec",
            "range": "stddev: 0.00047206515871786386",
            "extra": "mean: 26.39593999999671 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.359426249947454,
            "unit": "iter/sec",
            "range": "stddev: 0.0010127738806115655",
            "extra": "mean: 26.767006358974974 msec\nrounds: 39"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "fb3734a834bec7bd77ee30e99bc1736cd93c7943",
          "message": "ci: add curl to shell.nix to fix docs building",
          "timestamp": "2022-02-02T11:48:43-05:00",
          "tree_id": "0e2e3ad72f7f66171b2bc4320937fbf501ee1c68",
          "url": "https://github.com/ibis-project/ibis/commit/fb3734a834bec7bd77ee30e99bc1736cd93c7943"
        },
        "date": 1643823926418,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 154.91947472967178,
            "unit": "iter/sec",
            "range": "stddev: 0.003558275331624206",
            "extra": "mean: 6.45496637362707 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6248087796160307,
            "unit": "iter/sec",
            "range": "stddev: 0.007156640582226474",
            "extra": "mean: 1.600489674000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6201166796686469,
            "unit": "iter/sec",
            "range": "stddev: 0.022547664696957383",
            "extra": "mean: 1.6125997458 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 208.44199882971571,
            "unit": "iter/sec",
            "range": "stddev: 0.0007162111256680706",
            "extra": "mean: 4.797497652173919 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.500804633166936,
            "unit": "iter/sec",
            "range": "stddev: 0.013957070323978764",
            "extra": "mean: 28.168375627907352 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0762464132511622,
            "unit": "iter/sec",
            "range": "stddev: 0.015349390895083461",
            "extra": "mean: 929.1552451999962 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.522661274802694,
            "unit": "iter/sec",
            "range": "stddev: 0.002001733580986519",
            "extra": "mean: 40.778608357140705 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7211.898189622335,
            "unit": "iter/sec",
            "range": "stddev: 0.00013521978223080631",
            "extra": "mean: 138.65975000021 usec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.87705197186233,
            "unit": "iter/sec",
            "range": "stddev: 0.00047583411077035666",
            "extra": "mean: 7.2528385666679185 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 73.75909301827232,
            "unit": "iter/sec",
            "range": "stddev: 0.0006824266379440475",
            "extra": "mean: 13.557650441177065 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 317989.11045921175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034147352315883848",
            "extra": "mean: 3.1447617767661553 usec\nrounds: 29762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 362787.0895736471,
            "unit": "iter/sec",
            "range": "stddev: 0.000002975892003710703",
            "extra": "mean: 2.7564376703019264 usec\nrounds: 76336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 630.7442381848916,
            "unit": "iter/sec",
            "range": "stddev: 0.00018429318250035105",
            "extra": "mean: 1.585428672131393 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.66920373920003,
            "unit": "iter/sec",
            "range": "stddev: 0.0010955245481547823",
            "extra": "mean: 10.9087889848483 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 34.87322626200913,
            "unit": "iter/sec",
            "range": "stddev: 0.017310980618882428",
            "extra": "mean: 28.675293547170288 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.503959478052565,
            "unit": "iter/sec",
            "range": "stddev: 0.0007704810266667327",
            "extra": "mean: 21.50354531579075 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 289619.2407141923,
            "unit": "iter/sec",
            "range": "stddev: 0.000005024191677823405",
            "extra": "mean: 3.4528092730787856 usec\nrounds: 21460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 71.52038888821255,
            "unit": "iter/sec",
            "range": "stddev: 0.001061890654513766",
            "extra": "mean: 13.98202688135568 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.90967685781855,
            "unit": "iter/sec",
            "range": "stddev: 0.0019673216497486535",
            "extra": "mean: 30.386199303030345 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7006045356280022,
            "unit": "iter/sec",
            "range": "stddev: 0.013528203290780572",
            "extra": "mean: 588.0261866000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 130.40963635030943,
            "unit": "iter/sec",
            "range": "stddev: 0.003733075847919683",
            "extra": "mean: 7.668144992857558 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0918914651751473,
            "unit": "iter/sec",
            "range": "stddev: 0.15815119958213333",
            "extra": "mean: 10.882403475600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5031.895323957728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000681633304597896",
            "extra": "mean: 198.73227394831255 usec\nrounds: 2829"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 250.33674092431346,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374295615427649",
            "extra": "mean: 3.994619392693695 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 17439.74159676274,
            "unit": "iter/sec",
            "range": "stddev: 0.000024673484647368955",
            "extra": "mean: 57.3402991352593 usec\nrounds: 5897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.497629018256289,
            "unit": "iter/sec",
            "range": "stddev: 0.018344847955488415",
            "extra": "mean: 400.3797172000134 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.95999059502702,
            "unit": "iter/sec",
            "range": "stddev: 0.0008267737572007037",
            "extra": "mean: 12.506254597561114 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.94858430298622,
            "unit": "iter/sec",
            "range": "stddev: 0.0010159767820417276",
            "extra": "mean: 15.885980774194488 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 214.48932088133728,
            "unit": "iter/sec",
            "range": "stddev: 0.0004788457317915344",
            "extra": "mean: 4.662236776595669 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.48581510588507,
            "unit": "iter/sec",
            "range": "stddev: 0.006543419541742228",
            "extra": "mean: 11.301246406594851 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.278548853573405,
            "unit": "iter/sec",
            "range": "stddev: 0.0017209803067905274",
            "extra": "mean: 25.459189027779573 msec\nrounds: 36"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "156c2bd325ce2a2049e45aa57f9a2ca929024577",
          "message": "fix: expose ops.IfNull for mysql backend",
          "timestamp": "2022-02-02T18:08:22-05:00",
          "tree_id": "55ac3f5baef0ab93a796ba357cf32caedee735f7",
          "url": "https://github.com/ibis-project/ibis/commit/156c2bd325ce2a2049e45aa57f9a2ca929024577"
        },
        "date": 1643843451222,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 41.54350916251798,
            "unit": "iter/sec",
            "range": "stddev: 0.014483087844042756",
            "extra": "mean: 24.07114902325669 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 291.2929102170189,
            "unit": "iter/sec",
            "range": "stddev: 0.00009605347939554221",
            "extra": "mean: 3.4329706111109277 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 784.0407682468032,
            "unit": "iter/sec",
            "range": "stddev: 0.000021950558880920053",
            "extra": "mean: 1.275443880598332 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 275.7524024753548,
            "unit": "iter/sec",
            "range": "stddev: 0.0001345744848627878",
            "extra": "mean: 3.626441659341025 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 384436.14333984395,
            "unit": "iter/sec",
            "range": "stddev: 3.166808181114119e-7",
            "extra": "mean: 2.601212235957725 usec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.26968243437244,
            "unit": "iter/sec",
            "range": "stddev: 0.00013448407635746035",
            "extra": "mean: 6.1248358243237115 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.0116357746510563,
            "unit": "iter/sec",
            "range": "stddev: 0.002885416381073013",
            "extra": "mean: 332.045464600003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 79.4264445878404,
            "unit": "iter/sec",
            "range": "stddev: 0.00032428118883424197",
            "extra": "mean: 12.590265184211615 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3518714941390964,
            "unit": "iter/sec",
            "range": "stddev: 0.005192151466782557",
            "extra": "mean: 739.7152794000021 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9201931212469056,
            "unit": "iter/sec",
            "range": "stddev: 0.01232263546298109",
            "extra": "mean: 1.0867284017999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.32115384349957,
            "unit": "iter/sec",
            "range": "stddev: 0.00004942876766533815",
            "extra": "mean: 12.147545962500672 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.16897311560757,
            "unit": "iter/sec",
            "range": "stddev: 0.00017855240523200784",
            "extra": "mean: 4.163735169565974 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1715993139334024,
            "unit": "iter/sec",
            "range": "stddev: 0.0038361455087618057",
            "extra": "mean: 460.4901068000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 180.5273840900985,
            "unit": "iter/sec",
            "range": "stddev: 0.005175502237574744",
            "extra": "mean: 5.539325820513275 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22927.536180434752,
            "unit": "iter/sec",
            "range": "stddev: 0.000012370167280160598",
            "extra": "mean: 43.6156764569126 usec\nrounds: 6435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 327795.7050271457,
            "unit": "iter/sec",
            "range": "stddev: 3.6781808308646417e-7",
            "extra": "mean: 3.050680605827911 usec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.33343295561667,
            "unit": "iter/sec",
            "range": "stddev: 0.00019701755659898228",
            "extra": "mean: 6.198343280001382 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.18962982580204,
            "unit": "iter/sec",
            "range": "stddev: 0.000709037617538594",
            "extra": "mean: 10.847207021978083 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.57234380722104,
            "unit": "iter/sec",
            "range": "stddev: 0.0018427906530286147",
            "extra": "mean: 39.10474563999969 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 322232.8873082913,
            "unit": "iter/sec",
            "range": "stddev: 2.477072456385743e-7",
            "extra": "mean: 3.103345559645703 usec\nrounds: 28736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 113.79712480322164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005453444914094593",
            "extra": "mean: 8.787568242424433 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.16396999643599,
            "unit": "iter/sec",
            "range": "stddev: 0.0005025350031287866",
            "extra": "mean: 23.71693178048764 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9836.245066942796,
            "unit": "iter/sec",
            "range": "stddev: 0.000015773195036160785",
            "extra": "mean: 101.6648114391491 usec\nrounds: 4948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6361.1867201456735,
            "unit": "iter/sec",
            "range": "stddev: 0.00003261434372223689",
            "extra": "mean: 157.2033716339488 usec\nrounds: 2785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.35166933504424,
            "unit": "iter/sec",
            "range": "stddev: 0.0009829987370884661",
            "extra": "mean: 14.419263582090704 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.46261040302666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003285955336755159",
            "extra": "mean: 10.586199086955986 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9069574781270555,
            "unit": "iter/sec",
            "range": "stddev: 0.010917269309395117",
            "extra": "mean: 1.102587523799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14808729401554874,
            "unit": "iter/sec",
            "range": "stddev: 0.017902517816135843",
            "extra": "mean: 6.752773805799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 27.298287948288564,
            "unit": "iter/sec",
            "range": "stddev: 0.035665128580994604",
            "extra": "mean: 36.632333935897755 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.08450331035041,
            "unit": "iter/sec",
            "range": "stddev: 0.0023337762090894594",
            "extra": "mean: 25.585588028572406 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.16545694422124,
            "unit": "iter/sec",
            "range": "stddev: 0.00120366954344689",
            "extra": "mean: 19.16977361224433 msec\nrounds: 49"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "75ccb2b218e1def08398c51f5ebc0b79b5b778c9",
          "message": "ci: add skip helpers",
          "timestamp": "2022-02-02T18:45:43-05:00",
          "tree_id": "345f23c9b809d1da7d00e3cbadfcc02a76073666",
          "url": "https://github.com/ibis-project/ibis/commit/75ccb2b218e1def08398c51f5ebc0b79b5b778c9"
        },
        "date": 1643845695213,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 96.49259631315284,
            "unit": "iter/sec",
            "range": "stddev: 0.004812042521421038",
            "extra": "mean: 10.363489409639717 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.37682001493702,
            "unit": "iter/sec",
            "range": "stddev: 0.0004279061500597319",
            "extra": "mean: 14.209224000001086 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 150.74777209617318,
            "unit": "iter/sec",
            "range": "stddev: 0.00025909752232681956",
            "extra": "mean: 6.633597207406991 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 272.11762365731175,
            "unit": "iter/sec",
            "range": "stddev: 0.00017985816417673015",
            "extra": "mean: 3.6748814228193423 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.86833532744439,
            "unit": "iter/sec",
            "range": "stddev: 0.02361760047202014",
            "extra": "mean: 29.526104260272692 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.8184331650219,
            "unit": "iter/sec",
            "range": "stddev: 0.01928765550740034",
            "extra": "mean: 27.160308411766312 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 76.82370111130122,
            "unit": "iter/sec",
            "range": "stddev: 0.00041150433622947095",
            "extra": "mean: 13.016816236843528 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9068087678192076,
            "unit": "iter/sec",
            "range": "stddev: 0.0032830600513100816",
            "extra": "mean: 344.01987880002025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13780393502055674,
            "unit": "iter/sec",
            "range": "stddev: 0.10666340745801799",
            "extra": "mean: 7.256686827200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.61545091562222,
            "unit": "iter/sec",
            "range": "stddev: 0.001029506520379291",
            "extra": "mean: 14.573976949152746 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 340982.5164617489,
            "unit": "iter/sec",
            "range": "stddev: 7.886013786527187e-7",
            "extra": "mean: 2.932701683290495 usec\nrounds: 25188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6059.237311973643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460881330399254",
            "extra": "mean: 165.03727259929275 usec\nrounds: 2843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8714510213364668,
            "unit": "iter/sec",
            "range": "stddev: 0.02574647905320125",
            "extra": "mean: 1.1475114211999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23226.332209188164,
            "unit": "iter/sec",
            "range": "stddev: 0.000018807113565125834",
            "extra": "mean: 43.05458093828553 usec\nrounds: 6925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 396377.5154996638,
            "unit": "iter/sec",
            "range": "stddev: 8.276445217646546e-7",
            "extra": "mean: 2.522847439364527 usec\nrounds: 74069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.84354897946247,
            "unit": "iter/sec",
            "range": "stddev: 0.000848736053273765",
            "extra": "mean: 18.92378576595315 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 338187.5087031812,
            "unit": "iter/sec",
            "range": "stddev: 9.351746565246493e-7",
            "extra": "mean: 2.956939491451398 usec\nrounds: 83327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 185.15844155985033,
            "unit": "iter/sec",
            "range": "stddev: 0.00035310882322497835",
            "extra": "mean: 5.400779956752669 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.7769940661381,
            "unit": "iter/sec",
            "range": "stddev: 0.00035779697218303965",
            "extra": "mean: 6.298141653843459 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8657711291486582,
            "unit": "iter/sec",
            "range": "stddev: 0.0058996984085376665",
            "extra": "mean: 1.155039670799988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.5902090883656,
            "unit": "iter/sec",
            "range": "stddev: 0.0014929237699586105",
            "extra": "mean: 39.07744546153953 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 250.88332605176964,
            "unit": "iter/sec",
            "range": "stddev: 0.0036971016436288186",
            "extra": "mean: 3.985916544304943 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2574717446381651,
            "unit": "iter/sec",
            "range": "stddev: 0.014232490050192378",
            "extra": "mean: 795.2464970000165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 231.74598033081898,
            "unit": "iter/sec",
            "range": "stddev: 0.00029517407479965317",
            "extra": "mean: 4.315069450492704 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.79527145588352,
            "unit": "iter/sec",
            "range": "stddev: 0.0015689176102722008",
            "extra": "mean: 23.36706757499769 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 735.290083530914,
            "unit": "iter/sec",
            "range": "stddev: 0.00012084990224290914",
            "extra": "mean: 1.3600074615421585 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.01506072565185,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158458736929102",
            "extra": "mean: 10.987192581393929 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.10496233772987,
            "unit": "iter/sec",
            "range": "stddev: 0.00053609668507239",
            "extra": "mean: 10.740566076087223 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10402.569293248574,
            "unit": "iter/sec",
            "range": "stddev: 0.000012584080745568575",
            "extra": "mean: 96.13009746053942 usec\nrounds: 5828"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.307539366326374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008060674171426089",
            "extra": "mean: 23.090667690474845 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0582804454570827,
            "unit": "iter/sec",
            "range": "stddev: 0.009580770664374022",
            "extra": "mean: 485.84244300000137 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "0075d66c18fe420e045b56ff4287cdd7706a6f69",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-03T02:14:04Z",
          "tree_id": "287d1ccd390e292b739559f7740bb9f81afe0638",
          "url": "https://github.com/ibis-project/ibis/commit/0075d66c18fe420e045b56ff4287cdd7706a6f69"
        },
        "date": 1643855214819,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 179.54692698151922,
            "unit": "iter/sec",
            "range": "stddev: 0.0024900270481245865",
            "extra": "mean: 5.569574577586226 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10082239352577221,
            "unit": "iter/sec",
            "range": "stddev: 0.0921498739025947",
            "extra": "mean: 9.918431461800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 108.18615566177164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007450764685311269",
            "extra": "mean: 9.243326873785545 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.7365196780294525,
            "unit": "iter/sec",
            "range": "stddev: 0.008635069083044147",
            "extra": "mean: 365.4276664000065 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 280.70352044092294,
            "unit": "iter/sec",
            "range": "stddev: 0.000601030669656873",
            "extra": "mean: 3.562477586420084 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.088682492841954,
            "unit": "iter/sec",
            "range": "stddev: 0.0013056474528341077",
            "extra": "mean: 28.49921766666499 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.17469077648448,
            "unit": "iter/sec",
            "range": "stddev: 0.001629291742192025",
            "extra": "mean: 22.63739671794896 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 85.68944698516913,
            "unit": "iter/sec",
            "range": "stddev: 0.00040659848618102457",
            "extra": "mean: 11.670048473682845 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5662.906102208422,
            "unit": "iter/sec",
            "range": "stddev: 0.00006227282529036059",
            "extra": "mean: 176.5877770090554 usec\nrounds: 2601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6461539301657877,
            "unit": "iter/sec",
            "range": "stddev: 0.04369410519063313",
            "extra": "mean: 1.547618846399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.077748303563936,
            "unit": "iter/sec",
            "range": "stddev: 0.0014870131822735358",
            "extra": "mean: 21.70244937777599 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1990432163671505,
            "unit": "iter/sec",
            "range": "stddev: 0.03506177117305406",
            "extra": "mean: 833.9982966000093 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 405796.82842011086,
            "unit": "iter/sec",
            "range": "stddev: 0.000002558420501867864",
            "extra": "mean: 2.464287372312152 usec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 346287.1772274085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030183449773300857",
            "extra": "mean: 2.8877765789846013 usec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.17227179173026,
            "unit": "iter/sec",
            "range": "stddev: 0.013865326713208379",
            "extra": "mean: 26.197026088885877 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 234.56092660670438,
            "unit": "iter/sec",
            "range": "stddev: 0.0005666421509831497",
            "extra": "mean: 4.26328465898641 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 40.007767348000044,
            "unit": "iter/sec",
            "range": "stddev: 0.015091387294756396",
            "extra": "mean: 24.995146349999686 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 74.49309173725678,
            "unit": "iter/sec",
            "range": "stddev: 0.001842072260643414",
            "extra": "mean: 13.424063583333094 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6546460032486121,
            "unit": "iter/sec",
            "range": "stddev: 0.016039948826618824",
            "extra": "mean: 1.527543122600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8877.62858199045,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870871542154287",
            "extra": "mean: 112.64269402176211 usec\nrounds: 5386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.35660814108276,
            "unit": "iter/sec",
            "range": "stddev: 0.004198858506793852",
            "extra": "mean: 12.14231647674135 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 768.4325129406054,
            "unit": "iter/sec",
            "range": "stddev: 0.00013848666239758237",
            "extra": "mean: 1.3013504545418593 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.850652108361626,
            "unit": "iter/sec",
            "range": "stddev: 0.0018330942602188332",
            "extra": "mean: 37.243043333334455 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 242.39727685281656,
            "unit": "iter/sec",
            "range": "stddev: 0.00042247045320238744",
            "extra": "mean: 4.125458887094673 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18783.78590380167,
            "unit": "iter/sec",
            "range": "stddev: 0.00001952105901932125",
            "extra": "mean: 53.237404063342154 usec\nrounds: 7875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.2023050623625,
            "unit": "iter/sec",
            "range": "stddev: 0.00044584194354998575",
            "extra": "mean: 6.242107437909376 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.64227573973025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004733055879885896",
            "extra": "mean: 6.866138248121364 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 107.12233075427118,
            "unit": "iter/sec",
            "range": "stddev: 0.0006058697785169192",
            "extra": "mean: 9.335121752474826 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.66708052948833,
            "unit": "iter/sec",
            "range": "stddev: 0.0005284082094132333",
            "extra": "mean: 11.152364882350946 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.026082085341225,
            "unit": "iter/sec",
            "range": "stddev: 0.010923444826815133",
            "extra": "mean: 493.5634183999923 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 346850.32855010324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022185858008295565",
            "extra": "mean: 2.8830879422262043 usec\nrounds: 30031"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "773f4221ba76df14f53ea04db7dfe1f18da9cd3c",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-04T01:04:36Z",
          "tree_id": "b9f0e7c77ceea6d741653d1f7f4c1c8c4206bbed",
          "url": "https://github.com/ibis-project/ibis/commit/773f4221ba76df14f53ea04db7dfe1f18da9cd3c"
        },
        "date": 1643937614928,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 80.83111657165239,
            "unit": "iter/sec",
            "range": "stddev: 0.0004992822474451383",
            "extra": "mean: 12.371473294118788 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 375997.3311006694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016694800149948802",
            "extra": "mean: 2.659593346241759 usec\nrounds: 80646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 46.00667473560312,
            "unit": "iter/sec",
            "range": "stddev: 0.012858665442777887",
            "extra": "mean: 21.73597648051993 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.38189558777512,
            "unit": "iter/sec",
            "range": "stddev: 0.00017524970969746506",
            "extra": "mean: 6.158322000000625 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 251.00850039754098,
            "unit": "iter/sec",
            "range": "stddev: 0.0019480389339736612",
            "extra": "mean: 3.983928824785714 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 236.42286024595165,
            "unit": "iter/sec",
            "range": "stddev: 0.0018030326092420936",
            "extra": "mean: 4.229709423867455 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.268358026542074,
            "unit": "iter/sec",
            "range": "stddev: 0.001361159201495143",
            "extra": "mean: 21.613042750000876 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9345.496122625875,
            "unit": "iter/sec",
            "range": "stddev: 0.000026718759807764232",
            "extra": "mean: 107.00341500104571 usec\nrounds: 400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.98525028218959,
            "unit": "iter/sec",
            "range": "stddev: 0.0008956252385286366",
            "extra": "mean: 27.037805405403848 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 167.580970328468,
            "unit": "iter/sec",
            "range": "stddev: 0.0004806078820701482",
            "extra": "mean: 5.9672646484857115 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 291.74203312302694,
            "unit": "iter/sec",
            "range": "stddev: 0.00029621218110120615",
            "extra": "mean: 3.4276857170536768 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 44.981093115120224,
            "unit": "iter/sec",
            "range": "stddev: 0.009281880994826215",
            "extra": "mean: 22.231562880001547 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20220.91232650329,
            "unit": "iter/sec",
            "range": "stddev: 0.00001906225976500016",
            "extra": "mean: 49.45375282050517 usec\nrounds: 8953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0623814914863137,
            "unit": "iter/sec",
            "range": "stddev: 0.008746405565884326",
            "extra": "mean: 484.87634519999574 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 808.4883062892167,
            "unit": "iter/sec",
            "range": "stddev: 0.00009207445188523373",
            "extra": "mean: 1.2368762692311281 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 374072.6451314024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015067861449341114",
            "extra": "mean: 2.6732775385078607 usec\nrounds: 27398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 388489.4243024846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033936930437501956",
            "extra": "mean: 2.57407264508025 usec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 29.058820150843456,
            "unit": "iter/sec",
            "range": "stddev: 0.0011071197419799412",
            "extra": "mean: 34.41295946666211 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 193.20430425377324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004946634120785622",
            "extra": "mean: 5.175868125000482 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1263109907960778,
            "unit": "iter/sec",
            "range": "stddev: 0.02795127379370319",
            "extra": "mean: 887.8542499999924 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5521.691116851399,
            "unit": "iter/sec",
            "range": "stddev: 0.000055049650845894304",
            "extra": "mean: 181.10393697107492 usec\nrounds: 3189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6861195804240764,
            "unit": "iter/sec",
            "range": "stddev: 0.019625650573249682",
            "extra": "mean: 1.457471887600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.5697101792381,
            "unit": "iter/sec",
            "range": "stddev: 0.004535473044278158",
            "extra": "mean: 9.383529319148133 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.673714360795635,
            "unit": "iter/sec",
            "range": "stddev: 0.03136415764280634",
            "extra": "mean: 1.4843085707999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.9498805507081,
            "unit": "iter/sec",
            "range": "stddev: 0.0008498669231599669",
            "extra": "mean: 18.885783869565817 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 111.52242647223702,
            "unit": "iter/sec",
            "range": "stddev: 0.00035752711386256766",
            "extra": "mean: 8.966806333333729 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 87.62419258246635,
            "unit": "iter/sec",
            "range": "stddev: 0.00044756079034012365",
            "extra": "mean: 11.412373347222152 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 85.88472859655657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005371145435862677",
            "extra": "mean: 11.643513536585754 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.869712893265951,
            "unit": "iter/sec",
            "range": "stddev: 0.013529694115778696",
            "extra": "mean: 348.46691540000165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1060349141521076,
            "unit": "iter/sec",
            "range": "stddev: 0.04912111091284813",
            "extra": "mean: 9.43085594019999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.48840389923537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005616706106506974",
            "extra": "mean: 10.696513773813384 msec\nrounds: 84"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ac80436eedf9a2eac169f8be71605ea30a2855f1",
          "message": "docs: add better comparison section",
          "timestamp": "2022-02-04T14:01:01-05:00",
          "tree_id": "12be3645246dbac2b814ad4f3f14b1928772efe3",
          "url": "https://github.com/ibis-project/ibis/commit/ac80436eedf9a2eac169f8be71605ea30a2855f1"
        },
        "date": 1644001412198,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 390665.6977039596,
            "unit": "iter/sec",
            "range": "stddev: 2.801994662918195e-7",
            "extra": "mean: 2.559733311312591 usec\nrounds: 30395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.570805208625764,
            "unit": "iter/sec",
            "range": "stddev: 0.00037105777733729614",
            "extra": "mean: 22.951148027028633 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 325924.0038035687,
            "unit": "iter/sec",
            "range": "stddev: 2.4360724750105325e-7",
            "extra": "mean: 3.0681999126480126 usec\nrounds: 27397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.43619732100129,
            "unit": "iter/sec",
            "range": "stddev: 0.00024619940224865025",
            "extra": "mean: 10.478204581396751 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.125371955235437,
            "unit": "iter/sec",
            "range": "stddev: 0.0012923117656902076",
            "extra": "mean: 470.50587900000096 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10003.571705332946,
            "unit": "iter/sec",
            "range": "stddev: 0.000004780699964932946",
            "extra": "mean: 99.9642956991947 usec\nrounds: 372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9187631235607706,
            "unit": "iter/sec",
            "range": "stddev: 0.006601831086772681",
            "extra": "mean: 1.088419827000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 165.14327282075382,
            "unit": "iter/sec",
            "range": "stddev: 0.000089929615589619",
            "extra": "mean: 6.05534807999959 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 43.04709976657899,
            "unit": "iter/sec",
            "range": "stddev: 0.014426305296079344",
            "extra": "mean: 23.23036872222417 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.48114092506685,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517346150964834",
            "extra": "mean: 4.158330238093792 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.97555851769614,
            "unit": "iter/sec",
            "range": "stddev: 0.0001859798336933155",
            "extra": "mean: 12.05174171604679 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6289.85784336068,
            "unit": "iter/sec",
            "range": "stddev: 0.00003588285030191289",
            "extra": "mean: 158.98610507637463 usec\nrounds: 2817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.91690833703756,
            "unit": "iter/sec",
            "range": "stddev: 0.008771889841465095",
            "extra": "mean: 1.0906215589999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 72.61148039532188,
            "unit": "iter/sec",
            "range": "stddev: 0.000629757615226018",
            "extra": "mean: 13.771926898551799 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 335926.89968902816,
            "unit": "iter/sec",
            "range": "stddev: 2.0428913713791232e-7",
            "extra": "mean: 2.976838118429077 usec\nrounds: 78125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.329323807015374,
            "unit": "iter/sec",
            "range": "stddev: 0.0011599575561654595",
            "extra": "mean: 752.2621612000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.1939231456621,
            "unit": "iter/sec",
            "range": "stddev: 0.00026834130978520634",
            "extra": "mean: 17.484375000001123 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23071.46249017589,
            "unit": "iter/sec",
            "range": "stddev: 0.000014294526914041918",
            "extra": "mean: 43.34358952865741 usec\nrounds: 6685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 293.51450674305937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008763086808069931",
            "extra": "mean: 3.4069866293709063 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 164.3429336692554,
            "unit": "iter/sec",
            "range": "stddev: 0.00005232544008385356",
            "extra": "mean: 6.0848372222229345 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 41.250763861014875,
            "unit": "iter/sec",
            "range": "stddev: 0.020794276626912394",
            "extra": "mean: 24.241975333336224 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.056393547424953,
            "unit": "iter/sec",
            "range": "stddev: 0.0008449536773344211",
            "extra": "mean: 35.64249975000016 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.798912750274695,
            "unit": "iter/sec",
            "range": "stddev: 0.0010322918669509549",
            "extra": "mean: 21.368017785715125 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.089059325677787,
            "unit": "iter/sec",
            "range": "stddev: 0.0010608888067877129",
            "extra": "mean: 323.72314500000243 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1503729405448707,
            "unit": "iter/sec",
            "range": "stddev: 0.041894648152071",
            "extra": "mean: 6.650132639399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 275.7840838481945,
            "unit": "iter/sec",
            "range": "stddev: 0.00014238840332402017",
            "extra": "mean: 3.62602506296357 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 105.01210056398455,
            "unit": "iter/sec",
            "range": "stddev: 0.005824130600894468",
            "extra": "mean: 9.522712093457207 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.51535211434701,
            "unit": "iter/sec",
            "range": "stddev: 0.0001608172993655098",
            "extra": "mean: 12.900670289478231 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 187.5661839620035,
            "unit": "iter/sec",
            "range": "stddev: 0.0037882930795828692",
            "extra": "mean: 5.33145143157882 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.019047507019,
            "unit": "iter/sec",
            "range": "stddev: 0.00034814607694756656",
            "extra": "mean: 11.23355088607471 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 792.6583335736999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000238864755594777",
            "extra": "mean: 1.2615776024097296 msec\nrounds: 83"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "713cf8230fce1fef907bbfa18b937190aaf85790",
          "message": "refactor: split ibis/expr.types.py into separate files",
          "timestamp": "2022-02-04T15:34:10-05:00",
          "tree_id": "db4cb2fc15bad31b83e22714185a7bfe3ac00460",
          "url": "https://github.com/ibis-project/ibis/commit/713cf8230fce1fef907bbfa18b937190aaf85790"
        },
        "date": 1644007050613,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 282648.6457890528,
            "unit": "iter/sec",
            "range": "stddev: 0.000014439369799661144",
            "extra": "mean: 3.5379614050807198 usec\nrounds: 13551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 205.84769065727951,
            "unit": "iter/sec",
            "range": "stddev: 0.002413052775213949",
            "extra": "mean: 4.857960741784189 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.66104533810868,
            "unit": "iter/sec",
            "range": "stddev: 0.0013800805116106715",
            "extra": "mean: 15.465261886365443 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09030318886171472,
            "unit": "iter/sec",
            "range": "stddev: 0.15779029619362553",
            "extra": "mean: 11.07380605940001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.53704430737885,
            "unit": "iter/sec",
            "range": "stddev: 0.018902111942325793",
            "extra": "mean: 29.817773767856437 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 222.8018086720644,
            "unit": "iter/sec",
            "range": "stddev: 0.00044764184089881253",
            "extra": "mean: 4.48829390551255 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.275293743050213,
            "unit": "iter/sec",
            "range": "stddev: 0.022359839773427256",
            "extra": "mean: 439.503691799996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.0105258792998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006954052007667856",
            "extra": "mean: 6.943936867768503 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.43318568624063,
            "unit": "iter/sec",
            "range": "stddev: 0.0049144161472673056",
            "extra": "mean: 11.437304864866316 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.8658268083042,
            "unit": "iter/sec",
            "range": "stddev: 0.0012242086373406458",
            "extra": "mean: 11.005237448723793 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.136356291779368,
            "unit": "iter/sec",
            "range": "stddev: 0.00308412348996069",
            "extra": "mean: 43.22201765000102 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6062893514634786,
            "unit": "iter/sec",
            "range": "stddev: 0.014363425881905091",
            "extra": "mean: 1.6493774756000108 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.20874934323139,
            "unit": "iter/sec",
            "range": "stddev: 0.014812724335846319",
            "extra": "mean: 28.40203127499734 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.25987129907285,
            "unit": "iter/sec",
            "range": "stddev: 0.0032182570438157067",
            "extra": "mean: 28.36085224242707 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.027258235135925,
            "unit": "iter/sec",
            "range": "stddev: 0.0009300967558503675",
            "extra": "mean: 17.53547392856904 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 618.8943493707111,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764515407242802",
            "extra": "mean: 1.6157846666669287 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.11507612456711,
            "unit": "iter/sec",
            "range": "stddev: 0.0029094141536473526",
            "extra": "mean: 24.928283742869034 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.96737082670968,
            "unit": "iter/sec",
            "range": "stddev: 0.001525182181026568",
            "extra": "mean: 13.339136599995527 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4627.57764865539,
            "unit": "iter/sec",
            "range": "stddev: 0.00010641040646028843",
            "extra": "mean: 216.09577967655815 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8295.214508535188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000568385587730725",
            "extra": "mean: 120.55143347662327 usec\nrounds: 3029"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 209.93591556226937,
            "unit": "iter/sec",
            "range": "stddev: 0.0006865085941759037",
            "extra": "mean: 4.7633583673460995 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16683.942436157937,
            "unit": "iter/sec",
            "range": "stddev: 0.00004129320870405243",
            "extra": "mean: 59.93787162875665 usec\nrounds: 6785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5967879531260938,
            "unit": "iter/sec",
            "range": "stddev: 0.019928479593092754",
            "extra": "mean: 1.6756370411999797 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 159.91508384434715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712149261426596",
            "extra": "mean: 6.25331879870286 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 71.11134057912723,
            "unit": "iter/sec",
            "range": "stddev: 0.0013145239614109215",
            "extra": "mean: 14.062454621949882 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7423038300114533,
            "unit": "iter/sec",
            "range": "stddev: 0.005078136822246221",
            "extra": "mean: 573.9527071999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.416543482230445,
            "unit": "iter/sec",
            "range": "stddev: 0.0015267726719397964",
            "extra": "mean: 31.83036353332795 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 259316.12075178392,
            "unit": "iter/sec",
            "range": "stddev: 0.000009159815396260298",
            "extra": "mean: 3.856297082884388 usec\nrounds: 22832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 120.02883630025106,
            "unit": "iter/sec",
            "range": "stddev: 0.000766024203568157",
            "extra": "mean: 8.331331293577728 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 257070.0471359811,
            "unit": "iter/sec",
            "range": "stddev: 0.000008798555337868701",
            "extra": "mean: 3.8899903397576105 usec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0054898060218878,
            "unit": "iter/sec",
            "range": "stddev: 0.013857947887358519",
            "extra": "mean: 994.5401673999982 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "66d9100a3f74d25bd2de6df98e029e8093cd5d22",
          "message": "chore(conda-lock): relock",
          "timestamp": "2022-02-04T18:41:31-05:00",
          "tree_id": "15243b73ed3dd70e976efc02a528b7b1a123514a",
          "url": "https://github.com/ibis-project/ibis/commit/66d9100a3f74d25bd2de6df98e029e8093cd5d22"
        },
        "date": 1644019196210,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 862.3206480810659,
            "unit": "iter/sec",
            "range": "stddev: 0.000015046170513390357",
            "extra": "mean: 1.1596614347868324 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.420273574558579,
            "unit": "iter/sec",
            "range": "stddev: 0.0012831168283926192",
            "extra": "mean: 413.1764320000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.7921121729304,
            "unit": "iter/sec",
            "range": "stddev: 0.0004708383676577053",
            "extra": "mean: 16.44950248077219 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.35490249607661,
            "unit": "iter/sec",
            "range": "stddev: 0.000587629795928125",
            "extra": "mean: 20.680426355551795 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 179.357928550065,
            "unit": "iter/sec",
            "range": "stddev: 0.00009189836343932981",
            "extra": "mean: 5.575443517239693 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 329.9577505312856,
            "unit": "iter/sec",
            "range": "stddev: 0.00008676893425274566",
            "extra": "mean: 3.030691045716724 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11734.843446764045,
            "unit": "iter/sec",
            "range": "stddev: 0.000017429021582942446",
            "extra": "mean: 85.21630514600142 usec\nrounds: 6102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.108163473264625,
            "unit": "iter/sec",
            "range": "stddev: 0.0011831442964180163",
            "extra": "mean: 20.786492931822988 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 435839.4437274763,
            "unit": "iter/sec",
            "range": "stddev: 7.263113667731673e-7",
            "extra": "mean: 2.2944228990556543 usec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 114.2562536753223,
            "unit": "iter/sec",
            "range": "stddev: 0.005072341736520357",
            "extra": "mean: 8.75225615957672 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.4906402316758256,
            "unit": "iter/sec",
            "range": "stddev: 0.0022403047590361376",
            "extra": "mean: 670.8526838000125 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 76.88453824445783,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424354972626949",
            "extra": "mean: 13.006516301372002 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16171092358491343,
            "unit": "iter/sec",
            "range": "stddev: 0.011716861191230415",
            "extra": "mean: 6.1838741491999825 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 26464.462043011907,
            "unit": "iter/sec",
            "range": "stddev: 0.000014183959683400852",
            "extra": "mean: 37.78652286128959 usec\nrounds: 5774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.354442505212226,
            "unit": "iter/sec",
            "range": "stddev: 0.028157707732202032",
            "extra": "mean: 30.907656648353694 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 372182.54743054096,
            "unit": "iter/sec",
            "range": "stddev: 2.733383711451526e-7",
            "extra": "mean: 2.68685355319254 usec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 265.67586820612604,
            "unit": "iter/sec",
            "range": "stddev: 0.00008783663018263678",
            "extra": "mean: 3.7639850647788027 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.956028764627122,
            "unit": "iter/sec",
            "range": "stddev: 0.017453527807148806",
            "extra": "mean: 1.0459936321999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7215.278399497491,
            "unit": "iter/sec",
            "range": "stddev: 0.00002953399431567845",
            "extra": "mean: 138.59479075258483 usec\nrounds: 2963"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.51670826627057,
            "unit": "iter/sec",
            "range": "stddev: 0.022169761049145937",
            "extra": "mean: 25.962758631575717 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.14062728066162,
            "unit": "iter/sec",
            "range": "stddev: 0.0007362889557614029",
            "extra": "mean: 10.736453352270107 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 106.95040031762214,
            "unit": "iter/sec",
            "range": "stddev: 0.0003618931730391769",
            "extra": "mean: 9.350128630002246 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 87.60285085706961,
            "unit": "iter/sec",
            "range": "stddev: 0.00024246248241170613",
            "extra": "mean: 11.415153619047995 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9464527821031268,
            "unit": "iter/sec",
            "range": "stddev: 0.004584621849198641",
            "extra": "mean: 1.0565767451999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 375296.68617188296,
            "unit": "iter/sec",
            "range": "stddev: 1.9179727993650214e-7",
            "extra": "mean: 2.664558566184642 usec\nrounds: 28011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.999157023506104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005834624888069246",
            "extra": "mean: 34.483760999998076 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 214.76891840846392,
            "unit": "iter/sec",
            "range": "stddev: 0.00010588077142201025",
            "extra": "mean: 4.656167230390961 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.423063319875885,
            "unit": "iter/sec",
            "range": "stddev: 0.002660822495927788",
            "extra": "mean: 292.13599240000576 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 92.56131684392409,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864197680666608",
            "extra": "mean: 10.80364923595663 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 315.2444487388303,
            "unit": "iter/sec",
            "range": "stddev: 0.00011430137382071816",
            "extra": "mean: 3.172141504792896 msec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.73354465501654,
            "unit": "iter/sec",
            "range": "stddev: 0.0003200693579590966",
            "extra": "mean: 5.722999564704878 msec\nrounds: 170"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "5dd8f563e03a7ace31515a9273ce844b5bc16eee",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-05T02:58:24Z",
          "tree_id": "7ed7465b4918abd584f2c64ec15da6365259dc15",
          "url": "https://github.com/ibis-project/ibis/commit/5dd8f563e03a7ace31515a9273ce844b5bc16eee"
        },
        "date": 1644030146871,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 325992.5082264493,
            "unit": "iter/sec",
            "range": "stddev: 1.8977800160701155e-7",
            "extra": "mean: 3.06755515775643 usec\nrounds: 12854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9323104218796674,
            "unit": "iter/sec",
            "range": "stddev: 0.0031793832041292387",
            "extra": "mean: 1.072604120400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 42.358207573295985,
            "unit": "iter/sec",
            "range": "stddev: 0.01776497807373635",
            "extra": "mean: 23.608175541177363 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9951.034258860142,
            "unit": "iter/sec",
            "range": "stddev: 0.000003125101767156293",
            "extra": "mean: 100.49206685321438 usec\nrounds: 359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.935054783192015,
            "unit": "iter/sec",
            "range": "stddev: 0.00039352554750784075",
            "extra": "mean: 18.203313056601537 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.95542143661172,
            "unit": "iter/sec",
            "range": "stddev: 0.00034009525026568757",
            "extra": "mean: 12.665374736842313 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 780.4039434662684,
            "unit": "iter/sec",
            "range": "stddev: 0.000015300567819147352",
            "extra": "mean: 1.28138768181817 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9205408290707767,
            "unit": "iter/sec",
            "range": "stddev: 0.011825512396416505",
            "extra": "mean: 1.0863179214000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.65144707332066,
            "unit": "iter/sec",
            "range": "stddev: 0.0007085899169461494",
            "extra": "mean: 20.985721555555557 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.1342447939098674,
            "unit": "iter/sec",
            "range": "stddev: 0.0010081757210442356",
            "extra": "mean: 319.0561253999988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.95831041967747,
            "unit": "iter/sec",
            "range": "stddev: 0.00027492893916295343",
            "extra": "mean: 6.371118530303907 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 193.26043216996933,
            "unit": "iter/sec",
            "range": "stddev: 0.00008432232873318065",
            "extra": "mean: 5.174364916666008 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 280.53538271801347,
            "unit": "iter/sec",
            "range": "stddev: 0.00012093607005026323",
            "extra": "mean: 3.564612742647058 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.490251768626,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287705004730031",
            "extra": "mean: 12.122644537500804 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 105.60112533612563,
            "unit": "iter/sec",
            "range": "stddev: 0.004673812082105746",
            "extra": "mean: 9.46959605607446 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22596.99641744395,
            "unit": "iter/sec",
            "range": "stddev: 0.000014770971111097394",
            "extra": "mean: 44.25366900656059 usec\nrounds: 7408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 333742.476942674,
            "unit": "iter/sec",
            "range": "stddev: 2.1011129177917954e-7",
            "extra": "mean: 2.9963222217343555 usec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.25658575646444,
            "unit": "iter/sec",
            "range": "stddev: 0.018043779590065794",
            "extra": "mean: 26.139290274512387 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.48971208105425,
            "unit": "iter/sec",
            "range": "stddev: 0.00005794879000778774",
            "extra": "mean: 6.11659282575667 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.504049379931256,
            "unit": "iter/sec",
            "range": "stddev: 0.0015754039976240868",
            "extra": "mean: 36.358282600003804 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6234.578054911475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003353709286506649",
            "extra": "mean: 160.39577838186182 usec\nrounds: 2942"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.82298217721466,
            "unit": "iter/sec",
            "range": "stddev: 0.0001713057262069567",
            "extra": "mean: 10.22254666279152 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 75.81000826303891,
            "unit": "iter/sec",
            "range": "stddev: 0.00032214026377598283",
            "extra": "mean: 13.190870478872496 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 294.5249401499957,
            "unit": "iter/sec",
            "range": "stddev: 0.00001259710461644723",
            "extra": "mean: 3.3952982028982666 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3566737864834617,
            "unit": "iter/sec",
            "range": "stddev: 0.0022385534287296836",
            "extra": "mean: 737.0968688000005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 381017.4473509327,
            "unit": "iter/sec",
            "range": "stddev: 1.8958983193387774e-7",
            "extra": "mean: 2.624551728411951 usec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.29929007260631,
            "unit": "iter/sec",
            "range": "stddev: 0.00012013352954283449",
            "extra": "mean: 9.871737494737127 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 235.71610788771673,
            "unit": "iter/sec",
            "range": "stddev: 0.00009507082949149238",
            "extra": "mean: 4.242391446902515 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14877411181613645,
            "unit": "iter/sec",
            "range": "stddev: 0.032267856172087675",
            "extra": "mean: 6.721599529599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.164480144899012,
            "unit": "iter/sec",
            "range": "stddev: 0.0017493203224443893",
            "extra": "mean: 462.0046999999886 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.042301257529836,
            "unit": "iter/sec",
            "range": "stddev: 0.00034154441942610495",
            "extra": "mean: 21.719157659098506 msec\nrounds: 44"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2011e567df587d81bff6f041aa2c973d35e9914a",
          "message": "chore: fix setup.py gen",
          "timestamp": "2022-02-04T22:20:27-05:00",
          "tree_id": "471f4078b455b3dea6da067826487b4fc7ca63c2",
          "url": "https://github.com/ibis-project/ibis/commit/2011e567df587d81bff6f041aa2c973d35e9914a"
        },
        "date": 1644031608819,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.21383363078533,
            "unit": "iter/sec",
            "range": "stddev: 0.00036650461646926347",
            "extra": "mean: 6.886396254385505 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 216.95458020491654,
            "unit": "iter/sec",
            "range": "stddev: 0.0007794626819515423",
            "extra": "mean: 4.609259684932609 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 202.51445556949778,
            "unit": "iter/sec",
            "range": "stddev: 0.00043479786417549446",
            "extra": "mean: 4.937919108973559 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 73.77191304238562,
            "unit": "iter/sec",
            "range": "stddev: 0.0008382352977123993",
            "extra": "mean: 13.55529440351439 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 148.74265129168273,
            "unit": "iter/sec",
            "range": "stddev: 0.0004757910778761238",
            "extra": "mean: 6.723021213592669 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.358598497724252,
            "unit": "iter/sec",
            "range": "stddev: 0.004161076213009293",
            "extra": "mean: 32.9395970000052 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 124.1582271736749,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977199481589976",
            "extra": "mean: 8.05423871429141 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.614409321476785,
            "unit": "iter/sec",
            "range": "stddev: 0.003076959468453289",
            "extra": "mean: 22.928202297298473 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.81898340554783,
            "unit": "iter/sec",
            "range": "stddev: 0.024899582027296797",
            "extra": "mean: 53.1378331363638 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16455.561253133495,
            "unit": "iter/sec",
            "range": "stddev: 0.00005365514411709285",
            "extra": "mean: 60.76972912787027 usec\nrounds: 5342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.646301954479613,
            "unit": "iter/sec",
            "range": "stddev: 0.057809125350187",
            "extra": "mean: 1.5472643909999875 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 577.3038451422963,
            "unit": "iter/sec",
            "range": "stddev: 0.0002542301840844702",
            "extra": "mean: 1.732190090910473 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.727439379790354,
            "unit": "iter/sec",
            "range": "stddev: 0.005116806051024335",
            "extra": "mean: 18.272369607142227 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.361295004830667,
            "unit": "iter/sec",
            "range": "stddev: 0.023458480995909813",
            "extra": "mean: 423.4964279999872 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7432973581144227,
            "unit": "iter/sec",
            "range": "stddev: 0.018018800107494973",
            "extra": "mean: 573.6256040000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.43135351008468,
            "unit": "iter/sec",
            "range": "stddev: 0.0012782176547646497",
            "extra": "mean: 11.569875506847426 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 310983.1798117202,
            "unit": "iter/sec",
            "range": "stddev: 0.000003551969323984237",
            "extra": "mean: 3.2156079972088327 usec\nrounds: 28010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.34293424155858,
            "unit": "iter/sec",
            "range": "stddev: 0.005511140223897322",
            "extra": "mean: 11.068934260273238 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 257.6192411454986,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946860287992231",
            "extra": "mean: 3.8816976385518442 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 358992.7293517576,
            "unit": "iter/sec",
            "range": "stddev: 0.000004410935825980163",
            "extra": "mean: 2.7855717351315876 usec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 302561.9601080717,
            "unit": "iter/sec",
            "range": "stddev: 0.000004280000844429155",
            "extra": "mean: 3.3051081492293726 usec\nrounds: 81295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.95721861678437,
            "unit": "iter/sec",
            "range": "stddev: 0.0016202666853584184",
            "extra": "mean: 16.678558863637164 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.848998765621985,
            "unit": "iter/sec",
            "range": "stddev: 0.0015777218643381191",
            "extra": "mean: 28.695228999993105 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 30.111597434378986,
            "unit": "iter/sec",
            "range": "stddev: 0.025720421998696282",
            "extra": "mean: 33.20979573333034 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6461266103148297,
            "unit": "iter/sec",
            "range": "stddev: 0.06918508935373587",
            "extra": "mean: 1.5476842835999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7191.773804821223,
            "unit": "iter/sec",
            "range": "stddev: 0.00005040076940479027",
            "extra": "mean: 139.04775471798345 usec\nrounds: 2067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0971251831303144,
            "unit": "iter/sec",
            "range": "stddev: 0.35123858756816645",
            "extra": "mean: 10.295990882800027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 25.359411346320776,
            "unit": "iter/sec",
            "range": "stddev: 0.03422655086989133",
            "extra": "mean: 39.433091972976065 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3987.9659803228637,
            "unit": "iter/sec",
            "range": "stddev: 0.00013163866622102442",
            "extra": "mean: 250.75439583339687 usec\nrounds: 2880"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 61.731942375801886,
            "unit": "iter/sec",
            "range": "stddev: 0.010702594557130986",
            "extra": "mean: 16.199069096390314 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8863694459029482,
            "unit": "iter/sec",
            "range": "stddev: 0.08062161563057517",
            "extra": "mean: 1.1281977336000069 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "507bb14efdcfd719a0487ee23fe1c85c177517f6",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-05T05:28:45Z",
          "tree_id": "19fb857cd17b9a5bed5165669cbb264fd0e63bc5",
          "url": "https://github.com/ibis-project/ibis/commit/507bb14efdcfd719a0487ee23fe1c85c177517f6"
        },
        "date": 1644039102551,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 227.74070021774207,
            "unit": "iter/sec",
            "range": "stddev: 0.0007657817019557638",
            "extra": "mean: 4.390958660634237 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.493789341431494,
            "unit": "iter/sec",
            "range": "stddev: 0.001815071125517988",
            "extra": "mean: 21.055384585361857 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15882.22603037901,
            "unit": "iter/sec",
            "range": "stddev: 0.00047595651689269903",
            "extra": "mean: 62.96346608386206 usec\nrounds: 5838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.687560329534199,
            "unit": "iter/sec",
            "range": "stddev: 0.01208678395306007",
            "extra": "mean: 1.4544178264000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6556541537045288,
            "unit": "iter/sec",
            "range": "stddev: 0.012452350329537069",
            "extra": "mean: 603.9908744000059 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.30261699124095,
            "unit": "iter/sec",
            "range": "stddev: 0.002211487944085732",
            "extra": "mean: 29.15229471428802 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.12620242745857,
            "unit": "iter/sec",
            "range": "stddev: 0.0018190602769306422",
            "extra": "mean: 14.678640000003076 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 157.66982912927517,
            "unit": "iter/sec",
            "range": "stddev: 0.0008411396548798965",
            "extra": "mean: 6.342367499999568 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10266997853117873,
            "unit": "iter/sec",
            "range": "stddev: 0.08720201603911246",
            "extra": "mean: 9.739945545000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.01984385610402,
            "unit": "iter/sec",
            "range": "stddev: 0.014963441245450666",
            "extra": "mean: 27.012539650004896 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.828445586902234,
            "unit": "iter/sec",
            "range": "stddev: 0.0029956307793466736",
            "extra": "mean: 26.435133257133916 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.26509925258226,
            "unit": "iter/sec",
            "range": "stddev: 0.0009022434161602014",
            "extra": "mean: 10.608380067797004 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0867435826028198,
            "unit": "iter/sec",
            "range": "stddev: 0.01044051234058752",
            "extra": "mean: 920.1802670000006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6819203993303145,
            "unit": "iter/sec",
            "range": "stddev: 0.01775526555063934",
            "extra": "mean: 1.4664468184000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 72.55688346148582,
            "unit": "iter/sec",
            "range": "stddev: 0.0013395296751047853",
            "extra": "mean: 13.78228987096467 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 350030.30625841924,
            "unit": "iter/sec",
            "range": "stddev: 0.000006479401259929228",
            "extra": "mean: 2.8568954805351146 usec\nrounds: 82645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.34033247415275,
            "unit": "iter/sec",
            "range": "stddev: 0.0010092423396678204",
            "extra": "mean: 7.97827786364151 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.16269021681752,
            "unit": "iter/sec",
            "range": "stddev: 0.023463537633752064",
            "extra": "mean: 31.091926491805424 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.49232308145326,
            "unit": "iter/sec",
            "range": "stddev: 0.0014516384657745531",
            "extra": "mean: 15.268965169494644 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.275776026239285,
            "unit": "iter/sec",
            "range": "stddev: 0.002742204043444697",
            "extra": "mean: 42.963121782606876 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.67384390618648,
            "unit": "iter/sec",
            "range": "stddev: 0.000848248733144847",
            "extra": "mean: 11.810022479999134 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.4662055167501955,
            "unit": "iter/sec",
            "range": "stddev: 0.0024096985263999064",
            "extra": "mean: 405.4812112000036 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 303746.09369392495,
            "unit": "iter/sec",
            "range": "stddev: 0.00001123998261448431",
            "extra": "mean: 3.292223408830625 usec\nrounds: 70418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.1905567729021,
            "unit": "iter/sec",
            "range": "stddev: 0.0012485024389274793",
            "extra": "mean: 11.087635288891482 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 205.31403145472174,
            "unit": "iter/sec",
            "range": "stddev: 0.00039735332400062876",
            "extra": "mean: 4.870587718309607 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4930.856264876815,
            "unit": "iter/sec",
            "range": "stddev: 0.00008723975846322682",
            "extra": "mean: 202.8045325764495 usec\nrounds: 2732"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 315065.8884261303,
            "unit": "iter/sec",
            "range": "stddev: 0.000010259869044778126",
            "extra": "mean: 3.1739392829714665 usec\nrounds: 27027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 251.0626693159832,
            "unit": "iter/sec",
            "range": "stddev: 0.00031724654590635195",
            "extra": "mean: 3.9830692580640776 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.01318314858491,
            "unit": "iter/sec",
            "range": "stddev: 0.0010200876950558428",
            "extra": "mean: 7.461952447553362 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 653.0746089919069,
            "unit": "iter/sec",
            "range": "stddev: 0.0005314071765000092",
            "extra": "mean: 1.5312186176455564 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8372.444441818961,
            "unit": "iter/sec",
            "range": "stddev: 0.00004872076309449574",
            "extra": "mean: 119.43943097492138 usec\nrounds: 4636"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "bdcbb083a112d3cc81bb98ee63a26674b5397563",
          "message": "fix: remove passing schema into register_parquet",
          "timestamp": "2022-02-05T12:44:44-05:00",
          "tree_id": "39a578ec6e8547977656ada149daa25111000e7f",
          "url": "https://github.com/ibis-project/ibis/commit/bdcbb083a112d3cc81bb98ee63a26674b5397563"
        },
        "date": 1644083690715,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 81.30520948079747,
            "unit": "iter/sec",
            "range": "stddev: 0.00009139024248593616",
            "extra": "mean: 12.299334893616852 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.165506597708282,
            "unit": "iter/sec",
            "range": "stddev: 0.0029592180704934965",
            "extra": "mean: 461.78570920000084 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.56870924697657,
            "unit": "iter/sec",
            "range": "stddev: 0.00006399579726027063",
            "extra": "mean: 9.845551916667361 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.20935487443185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003914882862323625",
            "extra": "mean: 21.182242431819176 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.25571785000861,
            "unit": "iter/sec",
            "range": "stddev: 0.0000894573661805527",
            "extra": "mean: 12.157209567163182 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 44.26428886904346,
            "unit": "iter/sec",
            "range": "stddev: 0.009335732324918147",
            "extra": "mean: 22.591574959184694 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6429.587855226512,
            "unit": "iter/sec",
            "range": "stddev: 0.00003504418309665988",
            "extra": "mean: 155.5309644283211 usec\nrounds: 2755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 53.423149643161246,
            "unit": "iter/sec",
            "range": "stddev: 0.00018803854743947536",
            "extra": "mean: 18.71847704000004 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 359911.8355612801,
            "unit": "iter/sec",
            "range": "stddev: 1.9075162282050548e-7",
            "extra": "mean: 2.778458225583237 usec\nrounds: 74627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.36910065386573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006930726171840183",
            "extra": "mean: 6.314363066224752 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 190.6019421792682,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502765940870997",
            "extra": "mean: 5.246536255435754 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15181800425316885,
            "unit": "iter/sec",
            "range": "stddev: 0.04541546032271511",
            "extra": "mean: 6.586834051200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 273.9643437212549,
            "unit": "iter/sec",
            "range": "stddev: 0.00011075259385254406",
            "extra": "mean: 3.650110034090605 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 794.5953099924684,
            "unit": "iter/sec",
            "range": "stddev: 0.000014315963634298734",
            "extra": "mean: 1.2585022682923694 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9322390324256463,
            "unit": "iter/sec",
            "range": "stddev: 0.0027869472058065447",
            "extra": "mean: 1.0726862588000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.177785184728959,
            "unit": "iter/sec",
            "range": "stddev: 0.00234954309632528",
            "extra": "mean: 314.68458120000093 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.90026522226594,
            "unit": "iter/sec",
            "range": "stddev: 0.00005931948523000779",
            "extra": "mean: 16.42028973683988 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 165.56313441831477,
            "unit": "iter/sec",
            "range": "stddev: 0.000020793530158150696",
            "extra": "mean: 6.039991955415522 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 111.34315440727887,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996272086006134",
            "extra": "mean: 8.981243663549616 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 281.68188846523117,
            "unit": "iter/sec",
            "range": "stddev: 0.0001330318077774338",
            "extra": "mean: 3.5501040036638103 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 30.369721354299976,
            "unit": "iter/sec",
            "range": "stddev: 0.00029368679348468777",
            "extra": "mean: 32.927532931032715 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 44.7145703028783,
            "unit": "iter/sec",
            "range": "stddev: 0.015670423188182982",
            "extra": "mean: 22.364074913980097 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 327457.85763093893,
            "unit": "iter/sec",
            "range": "stddev: 1.5541511391583876e-7",
            "extra": "mean: 3.053828078015001 usec\nrounds: 29240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3521582276541155,
            "unit": "iter/sec",
            "range": "stddev: 0.0028957081148489766",
            "extra": "mean: 739.558418200005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9577.584496876263,
            "unit": "iter/sec",
            "range": "stddev: 0.000016499307322790753",
            "extra": "mean: 104.41045968596266 usec\nrounds: 5606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9363944684028714,
            "unit": "iter/sec",
            "range": "stddev: 0.0022580077747593737",
            "extra": "mean: 1.0679260010000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 229.27921806603524,
            "unit": "iter/sec",
            "range": "stddev: 0.00026592307139276344",
            "extra": "mean: 4.361494288208832 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.8252803458676,
            "unit": "iter/sec",
            "range": "stddev: 0.00003705113453762461",
            "extra": "mean: 9.539683525772912 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 81.30383923296701,
            "unit": "iter/sec",
            "range": "stddev: 0.000030319686396975688",
            "extra": "mean: 12.299542179485675 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 328762.0787094104,
            "unit": "iter/sec",
            "range": "stddev: 1.6717291908462977e-7",
            "extra": "mean: 3.041713338489657 usec\nrounds: 77520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23566.728659198976,
            "unit": "iter/sec",
            "range": "stddev: 0.00001554652967827806",
            "extra": "mean: 42.43270309006858 usec\nrounds: 8511"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "c856bab1242c62fd60b27e6c0c1e4ed25504941f",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-06T01:35:34Z",
          "tree_id": "b92a432d7fcfbd9efe0e9197e567d439cb6e6b89",
          "url": "https://github.com/ibis-project/ibis/commit/c856bab1242c62fd60b27e6c0c1e4ed25504941f"
        },
        "date": 1644111574939,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 261865.09158519472,
            "unit": "iter/sec",
            "range": "stddev: 0.000003084567841347237",
            "extra": "mean: 3.8187602400400964 usec\nrounds: 28491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7476.311081073767,
            "unit": "iter/sec",
            "range": "stddev: 0.000028279405601223067",
            "extra": "mean: 133.75580405308355 usec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.5158951169908,
            "unit": "iter/sec",
            "range": "stddev: 0.00039476954981354013",
            "extra": "mean: 7.603643644066319 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.51671448613997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005469344653309531",
            "extra": "mean: 15.263280642858692 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16039.45156356229,
            "unit": "iter/sec",
            "range": "stddev: 0.000023923957141671027",
            "extra": "mean: 62.34627138198137 usec\nrounds: 6419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.1245258301605645,
            "unit": "iter/sec",
            "range": "stddev: 0.023680173130211608",
            "extra": "mean: 470.6932651999921 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.20885631032406,
            "unit": "iter/sec",
            "range": "stddev: 0.003472199872805167",
            "extra": "mean: 31.047361333331956 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 624.9066671653384,
            "unit": "iter/sec",
            "range": "stddev: 0.00013826515513434",
            "extra": "mean: 1.6002389677423927 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.024320208146875,
            "unit": "iter/sec",
            "range": "stddev: 0.021604728609125684",
            "extra": "mean: 31.2262678333326 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5697239916244087,
            "unit": "iter/sec",
            "range": "stddev: 0.06156562128935514",
            "extra": "mean: 1.7552358943999877 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9966451785122455,
            "unit": "iter/sec",
            "range": "stddev: 0.017682383067292088",
            "extra": "mean: 1.0033661142000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.233750498491126,
            "unit": "iter/sec",
            "range": "stddev: 0.011857956466411267",
            "extra": "mean: 28.3818777692379 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.855404908541473,
            "unit": "iter/sec",
            "range": "stddev: 0.0019548427732048322",
            "extra": "mean: 47.949200909086315 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 67.08938679336865,
            "unit": "iter/sec",
            "range": "stddev: 0.0015131525213563529",
            "extra": "mean: 14.905487258065733 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.04438441917372,
            "unit": "iter/sec",
            "range": "stddev: 0.0012593221705503477",
            "extra": "mean: 13.690306352113028 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.33713553311823,
            "unit": "iter/sec",
            "range": "stddev: 0.0009942674358421422",
            "extra": "mean: 11.718227870584114 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.33991808841165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005039385295948822",
            "extra": "mean: 8.173946947367806 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.63610849532723,
            "unit": "iter/sec",
            "range": "stddev: 0.0017490113786984827",
            "extra": "mean: 15.714348718753435 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 150.53935938621777,
            "unit": "iter/sec",
            "range": "stddev: 0.0004979135894190754",
            "extra": "mean: 6.6427810246916215 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 187.38177653006193,
            "unit": "iter/sec",
            "range": "stddev: 0.0028169236191677113",
            "extra": "mean: 5.336698255924415 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.84536902348748,
            "unit": "iter/sec",
            "range": "stddev: 0.004944404189462239",
            "extra": "mean: 12.218162272724632 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 333838.16830926953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025006204045954084",
            "extra": "mean: 2.995463355986289 usec\nrounds: 57472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5470407199601107,
            "unit": "iter/sec",
            "range": "stddev: 0.0952605184395075",
            "extra": "mean: 1.828017483000019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 224.68493884640804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002770514634930354",
            "extra": "mean: 4.450676601352385 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 233584.43385939702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058928594869085866",
            "extra": "mean: 4.281107193135722 usec\nrounds: 24815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 186.17460247464737,
            "unit": "iter/sec",
            "range": "stddev: 0.0038065737810007703",
            "extra": "mean: 5.371301921464699 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.4434073620605061,
            "unit": "iter/sec",
            "range": "stddev: 0.058615126652996424",
            "extra": "mean: 692.8051126000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.18263535963196,
            "unit": "iter/sec",
            "range": "stddev: 0.0020044799214488083",
            "extra": "mean: 26.189915666670707 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.076514801182658,
            "unit": "iter/sec",
            "range": "stddev: 0.0014057720344299095",
            "extra": "mean: 32.178640571430606 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0907464972388105,
            "unit": "iter/sec",
            "range": "stddev: 0.08643017360406617",
            "extra": "mean: 11.019709084400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4677.719697377668,
            "unit": "iter/sec",
            "range": "stddev: 0.00007686865344580373",
            "extra": "mean: 213.77937642578297 usec\nrounds: 2367"
          }
        ]
      }
    ]
  }
}