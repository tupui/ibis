import operator

from public import public

from ibis import util
from ibis.common.validators import immutable_property
from ibis.expr import datatypes as dt
from ibis.expr import rules as rlz
from ibis.expr import types as ir
from ibis.expr.operations.core import BinaryOp, UnaryOp, ValueOp


@public
class NumericBinaryOp(BinaryOp):
    left = rlz.numeric
    right = rlz.numeric


@public
class Add(NumericBinaryOp):
    output_dtype = rlz.numeric_like("args", operator.add)


@public
class Multiply(NumericBinaryOp):
    output_dtype = rlz.numeric_like("args", operator.mul)


@public
class Power(NumericBinaryOp):
    @property
    def output_dtype(self):
        if util.all_of(self.args, ir.IntegerValue):
            return dt.float64
        else:
            return rlz.highest_precedence_dtype(self.args)


@public
class Subtract(NumericBinaryOp):
    output_dtype = rlz.numeric_like("args", operator.sub)


@public
class Divide(NumericBinaryOp):
    output_dtype = dt.float64


@public
class FloorDivide(Divide):
    output_dtype = dt.int64


@public
class Modulus(NumericBinaryOp):
    output_dtype = rlz.numeric_like("args", operator.mod)


@public
class Negate(UnaryOp):
    arg = rlz.one_of((rlz.numeric, rlz.interval))

    output_dtype = rlz.dtype_like("arg")


@public
class NullIfZero(UnaryOp):
    """Set values to NULL if they are equal to zero.

    Commonly used in cases where divide-by-zero would produce an overflow or
    infinity.

    Equivalent to

    ```python
    (value == 0).ifelse(ibis.NA, value)
    ```

    Returns
    -------
    NumericValue
        The input if not zero otherwise `NULL`.
    """

    arg = rlz.numeric
    output_dtype = rlz.dtype_like("arg")


@public
class IsNan(UnaryOp):
    arg = rlz.floating
    output_dtype = dt.boolean


@public
class IsInf(UnaryOp):
    arg = rlz.floating
    output_dtype = dt.boolean


@public
class Abs(UnaryOp):
    """Absolute value"""

    arg = rlz.numeric
    output_dtype = rlz.dtype_like("arg")


@public
class Ceil(UnaryOp):
    """
    Round up to the nearest integer value greater than or equal to this value

    Returns
    -------
    ceiled : type depending on input
      Decimal values: yield decimal
      Other numeric values: yield integer (int32)
    """

    arg = rlz.numeric

    @property
    def output_dtype(self):
        if isinstance(self.arg.type(), dt.Decimal):
            return self.arg.type()
        else:
            return dt.int64


@public
class Floor(UnaryOp):
    """
    Round down to the nearest integer value less than or equal to this value

    Returns
    -------
    floored : type depending on input
      Decimal values: yield decimal
      Other numeric values: yield integer (int32)
    """

    arg = rlz.numeric

    @property
    def output_dtype(self):
        if isinstance(self.arg.type(), dt.Decimal):
            return self.arg.type()
        else:
            return dt.int64


@public
class Round(ValueOp):
    arg = rlz.numeric
    digits = rlz.optional(rlz.numeric)

    output_shape = rlz.shape_like("arg")

    @property
    def output_dtype(self):
        if isinstance(self.arg.type(), dt.Decimal):
            return self.arg.type()
        elif self.digits is None:
            return dt.int64
        else:
            return dt.double


@public
class Clip(ValueOp):
    arg = rlz.strict_numeric
    lower = rlz.optional(rlz.strict_numeric)
    upper = rlz.optional(rlz.strict_numeric)

    output_dtype = rlz.dtype_like("arg")
    output_shape = rlz.shape_like("args")


@public
class BaseConvert(ValueOp):
    arg = rlz.one_of([rlz.integer, rlz.string])
    from_base = rlz.integer
    to_base = rlz.integer

    output_dtype = dt.string
    output_shape = rlz.shape_like("args")


@public
class MathUnaryOp(UnaryOp):
    arg = rlz.numeric

    @immutable_property
    def output_dtype(self):
        if isinstance(self.arg.type(), dt.Decimal):
            return self.arg.type()
        else:
            return dt.double


@public
class ExpandingMathUnaryOp(MathUnaryOp):
    @immutable_property
    def output_dtype(self):
        if isinstance(self.arg.type(), dt.Decimal):
            return self.arg.type().largest
        else:
            return dt.double


@public
class Exp(ExpandingMathUnaryOp):
    pass


@public
class Sign(UnaryOp):
    arg = rlz.numeric
    output_dtype = rlz.dtype_like("arg")


@public
class Sqrt(MathUnaryOp):
    pass


@public
class Logarithm(MathUnaryOp):
    arg = rlz.strict_numeric


@public
class Log(Logarithm):
    arg = rlz.strict_numeric
    base = rlz.optional(rlz.strict_numeric)


@public
class Ln(Logarithm):
    """Natural logarithm"""


@public
class Log2(Logarithm):
    """Logarithm base 2"""


@public
class Log10(Logarithm):
    """Logarithm base 10"""


@public
class Degrees(ExpandingMathUnaryOp):
    """Converts radians to degrees"""


@public
class Radians(MathUnaryOp):
    """Converts degrees to radians"""


# TRIGONOMETRIC OPERATIONS


@public
class TrigonometricUnary(MathUnaryOp):
    """Trigonometric base unary"""


@public
class TrigonometricBinary(BinaryOp):
    """Trigonometric base binary"""

    left = rlz.numeric
    right = rlz.numeric
    output_dtype = dt.float64


@public
class Acos(TrigonometricUnary):
    """Returns the arc cosine of x"""


@public
class Asin(TrigonometricUnary):
    """Returns the arc sine of x"""


@public
class Atan(TrigonometricUnary):
    """Returns the arc tangent of x"""


@public
class Atan2(TrigonometricBinary):
    """Returns the arc tangent of x and y"""


@public
class Cos(TrigonometricUnary):
    """Returns the cosine of x"""


@public
class Cot(TrigonometricUnary):
    """Returns the cotangent of x"""


@public
class Sin(TrigonometricUnary):
    """Returns the sine of x"""


@public
class Tan(TrigonometricUnary):
    """Returns the tangent of x"""
