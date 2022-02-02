window.BENCHMARK_DATA = {
  "lastUpdate": 1643843451743,
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
      }
    ]
  }
}