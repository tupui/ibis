window.BENCHMARK_DATA = {
  "lastUpdate": 1648831761270,
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
          "id": "2202e665eedb4809439264560a3852ea81820c25",
          "message": "chore: remove unused patch",
          "timestamp": "2022-04-01T12:39:31-04:00",
          "tree_id": "0bb2a82050dad4583310981b5e7dce21a28cf5a4",
          "url": "https://github.com/ibis-project/ibis/commit/2202e665eedb4809439264560a3852ea81820c25"
        },
        "date": 1648831758770,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1537.5595505900733,
            "unit": "iter/sec",
            "range": "stddev: 0.00003172364789063014",
            "extra": "mean: 650.3813134367558 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 182.87939573196772,
            "unit": "iter/sec",
            "range": "stddev: 0.00017311134782081289",
            "extra": "mean: 5.468084559212035 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.30229193932696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002657822475548168",
            "extra": "mean: 13.642138240748459 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 368761.03130134864,
            "unit": "iter/sec",
            "range": "stddev: 4.869226526134625e-7",
            "extra": "mean: 2.7117832827157042 usec\nrounds: 646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122244.86389085805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011519204591836826",
            "extra": "mean: 8.180302780596282 usec\nrounds: 36898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 3338372.3548080493,
            "unit": "iter/sec",
            "range": "stddev: 6.421825020332677e-8",
            "extra": "mean: 299.54717260935934 nsec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.51091326496996,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729990936911464",
            "extra": "mean: 11.171822111118482 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19693.16809822773,
            "unit": "iter/sec",
            "range": "stddev: 0.000015336970195148673",
            "extra": "mean: 50.77903133777618 usec\nrounds: 6382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 484.95861916269894,
            "unit": "iter/sec",
            "range": "stddev: 0.00007408520823481697",
            "extra": "mean: 2.062031605349218 msec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 62.3677102905233,
            "unit": "iter/sec",
            "range": "stddev: 0.0009570676746097203",
            "extra": "mean: 16.033937999996592 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 813016.6838730662,
            "unit": "iter/sec",
            "range": "stddev: 4.005996582541448e-7",
            "extra": "mean: 1.2299870591045914 usec\nrounds: 53474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.65085743971033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709526835410805",
            "extra": "mean: 25.220135567572875 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 10712.681412904438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051565459893287135",
            "extra": "mean: 93.34731067381557 usec\nrounds: 3560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.05073108019482,
            "unit": "iter/sec",
            "range": "stddev: 0.0001554759280239515",
            "extra": "mean: 5.745451304879865 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.95211901643447,
            "unit": "iter/sec",
            "range": "stddev: 0.006590815139522477",
            "extra": "mean: 13.341850945945023 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 389142.2535765277,
            "unit": "iter/sec",
            "range": "stddev: 6.144910877131246e-7",
            "extra": "mean: 2.56975435283422 usec\nrounds: 14244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 26043.644040589486,
            "unit": "iter/sec",
            "range": "stddev: 0.000003109840024990715",
            "extra": "mean: 38.39708446488833 usec\nrounds: 2948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1340371709821613,
            "unit": "iter/sec",
            "range": "stddev: 0.03723425087003634",
            "extra": "mean: 7.460617026399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.18342553008353,
            "unit": "iter/sec",
            "range": "stddev: 0.00026194887151752825",
            "extra": "mean: 10.731522202702863 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.6397050478358,
            "unit": "iter/sec",
            "range": "stddev: 0.00004786892525152679",
            "extra": "mean: 1.3304246612894912 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1170304.5899643057,
            "unit": "iter/sec",
            "range": "stddev: 3.136447295816407e-7",
            "extra": "mean: 854.478405515354 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 307.49283276292294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001847135095221366",
            "extra": "mean: 3.252108320752309 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6194.380274572146,
            "unit": "iter/sec",
            "range": "stddev: 0.00005075623379053042",
            "extra": "mean: 161.43664994301164 usec\nrounds: 2631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.71402580127961,
            "unit": "iter/sec",
            "range": "stddev: 0.0012664561318591599",
            "extra": "mean: 24.561560305553737 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 164.4204639023999,
            "unit": "iter/sec",
            "range": "stddev: 0.00025836780117650737",
            "extra": "mean: 6.08196800000273 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 7233676.102855893,
            "unit": "iter/sec",
            "range": "stddev: 1.4649568510599878e-8",
            "extra": "mean: 138.24229697059226 nsec\nrounds: 58477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.051269278588045,
            "unit": "iter/sec",
            "range": "stddev: 0.000772929902042319",
            "extra": "mean: 16.115705796610815 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.4437935748706,
            "unit": "iter/sec",
            "range": "stddev: 0.00018993875449271183",
            "extra": "mean: 7.069946122950025 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5702332.790703137,
            "unit": "iter/sec",
            "range": "stddev: 1.730965976586976e-8",
            "extra": "mean: 175.36682559647642 nsec\nrounds: 61725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11117.070850953181,
            "unit": "iter/sec",
            "range": "stddev: 0.000005793625127199813",
            "extra": "mean: 89.95175198638404 usec\nrounds: 6169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 966534.9773401035,
            "unit": "iter/sec",
            "range": "stddev: 1.829586020647977e-7",
            "extra": "mean: 1.034623705758048 usec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4245404.796450618,
            "unit": "iter/sec",
            "range": "stddev: 4.2466522837703864e-8",
            "extra": "mean: 235.5487987474899 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 726.7955843202369,
            "unit": "iter/sec",
            "range": "stddev: 0.00003138922622149807",
            "extra": "mean: 1.3759026906241978 msec\nrounds: 640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.42868087282817,
            "unit": "iter/sec",
            "range": "stddev: 0.0012402206926885387",
            "extra": "mean: 28.22571925806429 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1339.7393190514833,
            "unit": "iter/sec",
            "range": "stddev: 0.00003709011533919282",
            "extra": "mean: 746.4138625923034 usec\nrounds: 131"
          }
        ]
      }
    ]
  }
}