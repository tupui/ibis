window.BENCHMARK_DATA = {
  "lastUpdate": 1643709377117,
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
      }
    ]
  }
}