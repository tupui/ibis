window.BENCHMARK_DATA = {
  "lastUpdate": 1643597611909,
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
      }
    ]
  }
}